import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
