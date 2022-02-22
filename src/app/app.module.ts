import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import {ToastModule} from 'primeng/toast';
import { IndexComponent } from './shared/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './shared/menu/menu.component';
import { ContactoComponent } from './shared/contacto/contacto.component';


@NgModule({
  declarations: [AppComponent, LoginComponent,RegisterComponent, IndexComponent, MenuComponent, ContactoComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
