import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
