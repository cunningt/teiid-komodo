/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { Http, HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AboutDialogComponent } from "./about-dialog/about-dialog.component";
import { AboutService } from "./about-dialog/about.service";
import { MockAboutService } from "./about-dialog/mock-about.service";
import { AppSettingsService } from "./app-settings.service";
import { BreadcrumbComponent } from "./breadcrumbs/breadcrumb/breadcrumb.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { LoggerService } from "./logger.service";
import { MockAppSettingsService } from "./mock-app-settings.service";
import { VerticalNavComponent } from "./vertical-nav/vertical-nav.component";
import { environment } from "../environments/environment";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsModalService } from "ngx-bootstrap/modal";
import { StyleLibComponent } from "./style-lib/style-lib.component";
import { LibContentComponent } from "./lib-content/lib-content.component";
import { AboutModalModule, VerticalNavigationModule } from "patternfly-ng";

@NgModule({
  imports: [
    AboutModalModule,
    CommonModule,
    HttpModule,
    ModalModule,
    RouterModule,
    VerticalNavigationModule
  ],
  declarations: [
    AboutDialogComponent,
    BreadcrumbComponent,
    BreadcrumbsComponent,
    LibContentComponent,
    StyleLibComponent,
    VerticalNavComponent
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbsComponent,
    LibContentComponent,
    StyleLibComponent,
    VerticalNavComponent
  ],
  providers: [
    AboutService,
    {
      provide: AppSettingsService,
      useFactory: appSettingsServiceFactory,
      deps: [ Http, LoggerService ],
      multi: false
    },
    {
      provide: AboutService,
      useFactory: aboutServiceFactory,
      deps: [ Http, AppSettingsService, LoggerService],
      multi: false
    },
    LoggerService,
    BsModalService
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    if ( parentModule ) {
      throw new Error( "CoreModule is already loaded and should only be mported by the AppModule." );
    }
  }

}

/**
 * A factory that produces the appropriate instande of the service based on current environment settings.
 *
 * @param {Http} http the HTTP service
 * @param {LoggerService} logger the logger
 * @returns {AppSettingsService} the requested service
 */
export function appSettingsServiceFactory( http: Http,
                                           logger: LoggerService ): AppSettingsService {
  return environment.production || !environment.uiDevMode ? new AppSettingsService( http, logger )
                                                          : new MockAppSettingsService( http, logger );
}

/**
 * A factory that produces the appropriate instance of the service based on current environment settings.
 *
 * @param {Http} http the HTTP service
 * @param {AppSettingsService} appSettings the app settings
 * @param {LoggerService} logger the logger
 * @returns {AboutService} the requested service
 */
export function aboutServiceFactory( http: Http,
                                     appSettings: AppSettingsService,
                                     logger: LoggerService ): AboutService {
  return environment.production || !environment.uiDevMode ? new AboutService( http, appSettings, logger )
                                                          : new MockAboutService( http, appSettings, logger );
}
