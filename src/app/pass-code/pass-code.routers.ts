import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { MainPassCodeComponent } from './main-pass-code/main-pass-code.component';



const routers_passCode: Routes = [
    // {path: '',redirectTo: '', pathMatch: 'full'},
    // { path: '', component: MainPassCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routers_passCode)],
  exports: [RouterModule]
})
export class PassCodeRouters { }