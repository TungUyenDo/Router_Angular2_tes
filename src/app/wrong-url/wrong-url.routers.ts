import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { MainWrongUrlComponent } from './main-wrong-url/main-wrong-url.component';



const routers_wrongUrl: Routes = [
    {path: '',redirectTo: '', pathMatch: 'full'},
    { path: '', component: MainWrongUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routers_wrongUrl)],
  exports: [RouterModule]
})
export class WrongUrlRouters { }