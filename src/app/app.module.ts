import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HeadComponent } from './components/head/head.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientesComponent,
    SettingsComponent,
    HomeComponent,
    HeadComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
