import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { AppComponent } from "./app.component";
import { WrongUrlComponent } from "./wrong-url/wrong-url.component";


const MainRouters: Routes = [
    {path: '',redirectTo: '', pathMatch: 'full'},
    { path: '', component: AppComponent ,
        children:[
            {path: '',redirectTo: '', pathMatch: 'full'},
            { path: '', component: WrongUrlComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(MainRouters)],
  exports: [RouterModule]
})
export class AppRouters { }