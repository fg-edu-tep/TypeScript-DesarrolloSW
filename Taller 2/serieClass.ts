export class Serie {
    public numero: number;
    public nombre: string;
    public canal: string;
    public temporadas: number;
    public resumen: string;
    public link?: string;
    public imagen?: string;

    constructor(
        numero: number,
        nombre: string,
        canal: string,
        temporadas: number,
        resumen: string,
        link?: string,
        imagen?: string
      ) {
        this.numero = numero;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.resumen = resumen;
        this.link = link;
        this.imagen = imagen;
      }
      
    public getNumero(): number{
        return this.numero;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public getCanal(): string{
        return this.canal;
    }
    public getTemporadas(): number {
        return this.temporadas;
    }
    public getResumen(): string{
        return this.resumen;
    }
    public getLink(): any{
        return this.link;
    }  
    public getImagen(): any{
            return this.imagen;
        }
    
    public getAttributeList(): string[] {
        return [this.numero.toString(), this.nombre, this.canal, this.temporadas.toString()];
    }

  }
