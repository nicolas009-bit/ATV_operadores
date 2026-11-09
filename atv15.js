function validarVaga(){
    var idadeMotorista = 60
    var condicaoMotorista = false
    var veiculoCaminhao = false

    if((idadeMotorista >=60||condicaoMotorista == true)&& !veiculoCaminhao){
        console.log("parada permitida");
        
    }
    else{
        console.log("para proibida");
        
    }
}

validarVaga()