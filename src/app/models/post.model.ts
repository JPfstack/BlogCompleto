export class POST {

    titulo: string;
    texto: string;
    imagen: string;
    categoria: string;

    constructor(pTitulo: string, pTexto: string, pImagen: string, pCategoria: string) {

        this.titulo = pTitulo;
        this.texto = pTexto;
        this.imagen = pImagen;
        this.categoria = pCategoria;
    }
}