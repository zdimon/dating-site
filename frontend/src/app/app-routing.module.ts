import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './auth/login.form/login.form.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [

  { path: 'login', component: LoginFormComponent },
  { path: 'index', component: IndexComponent },

  { path: '', redirectTo: 'index' ,pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
