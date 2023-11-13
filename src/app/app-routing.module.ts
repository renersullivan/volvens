import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings/settings.component';
import { TableComponent } from './table/TableComponent';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'setings', component:SettingsComponent },
  {path: 'login', component: LoginComponent},
  {path:'',component:LoginComponent},
  {path:'table',component:TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
