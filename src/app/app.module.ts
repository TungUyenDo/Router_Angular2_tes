import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouters } from "./app.routers";


import { AppComponent } from './app.component';
import {PassCodeModule} from "./pass-code/pass-code.module";
import {MainPassCodeComponent} from "./pass-code/main-pass-code/main-pass-code.component";

import {WrongUrlModule} from './wrong-url/wrong-url.module';
import { MainWrongUrlComponent } from './wrong-url/main-wrong-url/main-wrong-url.component';




@NgModule({
  //import component child
  declarations: [
    AppComponent,
    MainPassCodeComponent,
    MainWrongUrlComponent,
    
  ],
  //import module parent 
  imports: [
    BrowserModule,
    AppRouters,
    WrongUrlModule,
    PassCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
