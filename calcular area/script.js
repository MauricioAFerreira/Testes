class retangulo {
    constructor (largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calculararea() {
        return this.largura * this.altura;
    }
}

const meuRetangulo = new retangulo(0, 0);
console.log(meuRetangulo.calculararea());