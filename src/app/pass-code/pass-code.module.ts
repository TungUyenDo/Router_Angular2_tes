import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PassCodeRouters} from "./pass-code.routers";
import {PassCodeComponent} from './pass-code.component';

@NgModule({
    declarations: [
        PassCodeComponent,
    ],
    imports: [
        BrowserModule, PassCodeRouters
    ],
    providers: [],
    bootstrap: [PassCodeComponent]
})
export class PassCodeModule {}