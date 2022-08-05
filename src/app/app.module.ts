import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CatsComponent} from "../pages/cats/main";
import {DogsComponent} from "../pages/dogs/main";
import {MainComponent} from "../pages/main/main";

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
