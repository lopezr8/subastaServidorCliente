let activo = true;

function evento1(){
    while(activo){
        let valor = document.getElementById("txtC").value;
        comparar(valor,server.precio)
    }
    return;
    //console.log(valor);
}

function evento2(){
    while(activo){
        let valor = document.getElementById("txtC1").value;
        comparar(valor,server.precio)
    }
    return;
    //console.log(valor);
}

function evento3(){
    while(activo){
        let valor = document.getElementById("txtC2").value;
        comparar(valor,server.precio)
    }
    return;
    //console.log(valor);
}

function comparar(vc, vs){
    (vc > vs)? server.editarP(vc) : undefined
}


class Servidor{
	constructor(precio,segundos){
		this.precio = precio; 
        this.segundos = segundos;
	}
    getInicio(){
        let self = this;
        var intervalo = setInterval(function(){
            self.segundos --
            document.getElementById("mensajeT").innerText = `quedan ${self.segundos} s para finalizar la subasta`;    
            console.log(self.segundos);
            if(self.segundos === 0){
                activo = false; 
                clearInterval(intervalo); //hace la limpieza del intervalo o lo detiene
            }
        
        },1000)
    }
    getVActual(){
        document.getElementById("mensajeS").innerText = `Valor actual: ${this.precio}`;
    }
    editarP(p){
        this.precio = p; 
        //this.segundos = 10;
        this.getVActual();
    }

}

let server = new Servidor(100000,10); 
server.getVActual();
server.getInicio();

