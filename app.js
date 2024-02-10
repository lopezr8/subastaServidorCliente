let activo = true;

function evento(inputId) {
    let valor = parseInt(document.getElementById(inputId).value);
    if (!isNaN(valor)) {
        comparar(valor, server.precio);
    }
}

function comparar(vc, vs) {
    if (vc > vs) {
        server.editarP(vc);
        server.resetTimer();  
    }
}

class Servidor {
    constructor(precio, segundos) {
        this.precio = precio;
        this.segundos = segundos;
        this.iniciarSubasta();
    }

    iniciarSubasta() {
        let self = this;
        let intervalo = setInterval(function () {
            self.segundos--;
            document.getElementById("mensajeT").innerText = `Quedan ${self.segundos} s para finalizar la subasta`;

            if (self.segundos === 0) {
                activo = false;
                clearInterval(intervalo);
            }
        }, 1000);
    }

    getVActual() {
        document.getElementById("mensajeS").innerText = `Valor actual: ${this.precio}`;
    }

    editarP(p) {
        this.precio = p;
        this.getVActual();
    }

    resetTimer() {
        this.segundos = 30;
    }
}

let server = new Servidor(100000, 30);
server.getVActual();
