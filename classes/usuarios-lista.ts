import { Usuario } from './usuario';
// centralizados toda la logica de los usuarios


export class UsuariosLista {
    private lista: Usuario[] = [];

    constructor(){}

    // Agregar un Usuario
    public agregar( usuario:Usuario ){
        this.lista.push( usuario );
        console.log( this.lista );
        return usuario;
    }

    public actualizarNombre( id: string, nombre: string ){
        for( let usuario of this.lista){
            if ( usuario.id === id ){
                usuario.nombre = nombre;
                break;
            }
        }

        console.log('==== Usuario actualizado ====');
        console.log(this.lista);
    }

    //Obtener Lista de Usuarios
    public getLista() {
        return this.lista;
    }

    public getUsuario(id:string ){
        return this.lista.find( usuario => usuario.id === id );
    }

    //Obtener Usuarios en una sala en particular
    public getUsuariosEnSala( sala: string ){
        return this.lista.filter( usuario => usuario.sala === sala);
    }

    //Borrar Un Usuario
    public borrarUsuario ( id: string ){
        const tempUsuario = this.getUsuario( id) ;
        this.lista = this.lista.filter( usuario => usuario.id !== id );
        return tempUsuario;
    }
}