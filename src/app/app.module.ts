import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DraggableDirective } from './directives/draggable.directive';
import { DropableDirective } from './directives/dropable.directive';
import { DropActionService } from './services/drop-action.service';
import { ResizeHandlerDirective } from './directives/resize-handler.directive';
import { ApiDataService } from './services/api-data.service';


@NgModule({
    declarations: [
        AppComponent,
        DraggableDirective,
        DropableDirective,
        ResizeHandlerDirective,
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [DropActionService, ApiDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
