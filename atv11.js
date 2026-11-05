function validarCasaco(){
    var temperatura = 15
    var chovendo = true

    if((temperatura < 15)||(chovendo == true)){
        console.log("Leve um casaco");
        
    }
    else{
        console.log("Vestuario livre");
        
    }
}

validarCasaco()