import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { LoginComponent } from './layout/publico/login/login/login.component';

//imputs de los modulos
import { InputTextModule } from 'primeng/inputtext';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './layout/publico/menu/menu.component';
import { MenuDatailComponent } from './layout/publico/menu/menu-datail/menu-datail.component';
import { CrearUsuarioComponent } from './layout/publico/crear-usuario/crear-usuario.component';

import { CookieModule } from 'ngx-cookie';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    MenuComponent,
    MenuDatailComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

