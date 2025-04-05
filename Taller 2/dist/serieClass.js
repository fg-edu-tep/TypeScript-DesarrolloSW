export class Serie {
    constructor(numero, nombre, canal, temporadas, resumen, link, imagen) {
        this.numero = numero;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.resumen = resumen;
        this.link = link;
        this.imagen = imagen;
    }
    getNumero() {
        return this.numero;
    }
    getNombre() {
        return this.nombre;
    }
    getCanal() {
        return this.canal;
    }
    getTemporadas() {
        return this.temporadas;
    }
    getResumen() {
        return this.resumen;
    }
    getLink() {
        return this.link;
    }
    getImagen() {
        return this.imagen;
    }
    getAttributeList() {
        return [this.numero.toString(), this.nombre, this.canal, this.temporadas.toString()];
    }
}
