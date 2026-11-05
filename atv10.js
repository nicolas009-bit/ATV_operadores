function validarFrete(){
    var valorCompra = 101
    var membroVip = false
    var zonaRural = false

    if(((valorCompra > 100 || membroVip == true)&& !zonaRural)){
        console.log("frete gratis");
    }
    else{
        console.log("nao possui frete gratis");
    }
        
        
}

validarFrete()