import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {path: 'setings', component:SettingsComponent },
  {path: 'login', component: LoginComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
