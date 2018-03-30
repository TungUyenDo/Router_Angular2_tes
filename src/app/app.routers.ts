import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { AppComponent } from "./app.component";
import { WrongUrlComponent } from "./wrong-url/wrong-url.component";
import { PassCodeComponent } from "./pass-code/pass-code.component";
import { MainPassCodeComponent } from "./pass-code/main-pass-code/main-pass-code.component";
import { MainWrongUrlComponent } from "./wrong-url/main-wrong-url/main-wrong-url.component";


const MainRouters: Routes = [
    { path: '', component: PassCodeComponent ,
        children:[
            { path: '', component: MainPassCodeComponent},
        ]
    },
    { path: 'wrong-url', component: WrongUrlComponent ,
        children:[
            { path: '', component: MainWrongUrlComponent},
        ]
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(MainRouters)],
  exports: [RouterModule]
})
export class AppRouters { }