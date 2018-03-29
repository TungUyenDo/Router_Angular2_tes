import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {WrongUrlRouters} from "./wrong-url.routers";
import {WrongUrlComponent} from './wrong-url.component';

@NgModule({
    declarations: [
        WrongUrlComponent,
    ],
    imports: [
        BrowserModule, WrongUrlRouters
    ],
    providers: [],
    bootstrap: [WrongUrlComponent]
})
export class WrongUrlModule {}