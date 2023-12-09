import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { HeadComponent } from './elements/head/head.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { AuthInterceptor } from './core/interceptor/interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from './elements/button/button.component';
import { ModalComponent } from './elements/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientesComponent,
    SettingsComponent,
    HomeComponent,
    HeadComponent,
    VendasComponent,
    ButtonComponent,
    ModalComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
