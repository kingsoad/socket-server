

export class Usuario {
    public id: string; // Es el id del socket que se conecta es obligatorio
    public nombre: string; // se configura opcional // ya que en su primera conexion no cuenta con nombre
    public sala: string; 

    constructor( id: string ) {
         this.id = id;
         this.nombre = 'sin-nombre';
         this.sala = 'sin-sala';
         
    }
}