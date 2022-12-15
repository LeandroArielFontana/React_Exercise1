export class Contact{
    name = '';
    lastName = '';
    email = '';
    conected = true;

    constructor(nombre, apellido, email, conectado){
        this.name = nombre;
        this.lastName = apellido;
        this.email = email;
        this.conected = conectado;
    }
}