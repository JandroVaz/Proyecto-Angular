import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { IndexComponent } from './shared/index/index.component';
import { LoginComponent } from './shared/login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
