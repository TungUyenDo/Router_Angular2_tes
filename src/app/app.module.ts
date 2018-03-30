import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouters } from "./app.routers";


import { AppComponent } from './app.component';
import {PassCodeComponent} from "./pass-code/pass-code.component";
import {MainPassCodeComponent} from "./pass-code/main-pass-code/main-pass-code.component";
import { WrongUrlComponent } from './wrong-url/wrong-url.component';
import { MainWrongUrlComponent } from './wrong-url/main-wrong-url/main-wrong-url.component';




@NgModule({
  declarations: [
    AppComponent,
    PassCodeComponent,
    MainPassCodeComponent,
    WrongUrlComponent,
    MainWrongUrlComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRouters
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
