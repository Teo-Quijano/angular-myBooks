import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit 
{
 public miUsuario: Usuario

  constructor() 
  { 
    this.miUsuario = new Usuario("Teo", "Quijano", "teo@gmail.com", "https://i.postimg.cc/28bP8Yj6/ciudad3.jpg", "12345678")
  }
 
  public datosUsuario():string{

    return this.miUsuario.datosUsuario();
  }

enviardatos(nuevoNombre: string, nuevoApellido: string, nuevoCorreo: string, nuevoUrl: string, nuevoPassword: string)
{
  console.log(this.miUsuario.nombre);
  console.log(this.miUsuario.apellido);
  console.log(this.miUsuario.correo);
  console.log(this.miUsuario.url);
  console.log(this.miUsuario.password);

  this.miUsuario.nombre = nuevoNombre;
  this.miUsuario.apellido = nuevoApellido;
  this.miUsuario.correo = nuevoCorreo;
  this.miUsuario.url = nuevoUrl;
  this.miUsuario.password = nuevoPassword;

  console.log(this.miUsuario.nombre);
  console.log(this.miUsuario.apellido);
  console.log(this.miUsuario.correo);
  console.log(this.miUsuario.url);
  console.log(this.miUsuario.password);

}

  ngOnInit(): void {
  }
}
