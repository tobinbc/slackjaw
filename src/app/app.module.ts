import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MatButtonModule,  MatSlideToggleModule, MatCardModule} from '@angular/material';
import { PopupComponent } from './popup/popup.component';
import { BackgroundComponent } from './background/background.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
