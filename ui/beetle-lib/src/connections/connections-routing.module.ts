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

import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddConnectionComponent } from "./add-connection/add-connection.component";
import { ConnectionsComponent } from "./connections.component";
import { ConnectionsConstants } from "./shared/connections-constants";

export const connectionsRoutes: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  { path: ConnectionsConstants.connectionsRootRoute, component: ConnectionsComponent },
  { path: ConnectionsConstants.addConnectionRoute, component: AddConnectionComponent }
]);

@NgModule({
  imports: [
    connectionsRoutes
  ],
  exports: [
    RouterModule
  ]
})
export class ConnectionsRoutingModule {}
