import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings/settings.component';
import { TableComponent } from './pages/table/tableComponent';
import { LoginComponent } from './pages/login/login.component';


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
