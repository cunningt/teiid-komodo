import { ModuleWithProviders } from "@angular/core";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { ConnectionService } from "../../../connections/shared/connection.service";
import { MockConnectionService } from "../../../connections/shared/mock-connection.service";
import { CoreModule } from "../../../core/core.module";
import { AppSettingsService } from "../../../core/app-settings.service";
import { MockAppSettingsService } from "../../../core/mock-app-settings.service";
import { SelectionService } from "../../../core/selection.service";
import { MockVdbService } from "../../shared/mock-vdb.service";
import { NotifierService } from "../../shared/notifier.service";
import { VdbService } from "../../shared/vdb.service";
import { ViewEditorComponent } from "./view-editor.component";
import { ViewCanvasComponent } from "./view-canvas/view-canvas.component";
import { ConnectionTableDialogComponent } from "./connection-table-dialog/connection-table-dialog.component";
import { ConnectionTreeSelectorComponent } from "./connection-table-dialog/connection-tree-selector/connection-tree-selector.component";
import { EditorViewsComponent } from "./editor-views/editor-views.component";
import { MessageLogComponent } from "./editor-views/message-log/message-log.component";
import { ViewPreviewComponent } from "./editor-views/view-preview/view-preview.component";
import { ViewEditorHeaderComponent } from "./view-editor-header/view-editor-header.component";
import { ViewPropertyEditorsComponent } from "./view-property-editors/view-property-editors.component";
import { TreeModule } from "angular-tree-component";
import { TabsModule } from "ngx-bootstrap";
import {
  ActionModule,
  CardModule,
  EmptyStateModule,
  FilterModule,
  ListModule,
  SortModule,
  TableModule,
  ToolbarModule,
  WizardModule } from "patternfly-ng";
import { GraphVisualComponent } from "./view-canvas/visuals/graph/graph-visual.component";
import { LinkVisualComponent } from "./view-canvas/visuals/link/link-visual.component";
import { NodeVisualComponent } from "./view-canvas/visuals/node/node-visual.component";
import { CanvasService } from "./view-canvas/canvas.service";

export const tabsModule: ModuleWithProviders<any> = TabsModule.forRoot();

describe('ViewEditorComponent', () => {
  let component: ViewEditorComponent;
  let fixture: ComponentFixture<ViewEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        FormsModule,
        ActionModule,
        CardModule,
        EmptyStateModule,
        FilterModule,
        ListModule,
        SortModule,
        TableModule,
        ToolbarModule,
        WizardModule,
        RouterTestingModule,
        tabsModule,
        TreeModule
      ],
      declarations: [
        ConnectionTableDialogComponent,
        ConnectionTreeSelectorComponent,
        EditorViewsComponent,
        GraphVisualComponent,
        LinkVisualComponent,
        NodeVisualComponent,
        MessageLogComponent,
        ViewCanvasComponent,
        ViewEditorComponent,
        ViewEditorHeaderComponent,
        ViewPreviewComponent,
        ViewPropertyEditorsComponent
      ],
      providers: [
        {provide: AppSettingsService, useClass: MockAppSettingsService},
        CanvasService,
        {provide: ConnectionService, useClass: MockConnectionService},
        NotifierService,
        SelectionService,
        {provide: VdbService, useClass: MockVdbService}
      ]
    })
      .compileComponents().then(() => {
      // nothing to do
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
