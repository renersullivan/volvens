import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VendasComponent } from './pages/vendas/vendas.component';


const routes: Routes = [
  {path: 'settings', component:SettingsComponent },
  {path:'clientes',component:ClientesComponent},
  {path:'home',component:HomeComponent},
  {path:'vendas',component:VendasComponent},
  {path: 'login', component: LoginComponent},
  {path:'',component:HomeComponent},
  {path:'*',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
