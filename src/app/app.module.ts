import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResizeObserverModule } from '@ng-web-apis/resize-observer';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ResizeObserverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
