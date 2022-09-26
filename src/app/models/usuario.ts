export class Usuario {

Id_usuario: number
nombre: string
apellido: string
correo: string
url: string
password: string

constructor(nombre: string, apellido: string, correo: string, url: string, password: string){

    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.url = url;
    this.password = password;
}

public datosUsuario():string {

    return this.nombre + " "  + this.apellido + " " + this.correo + " " +  this.url + " " + this.password;
}
}