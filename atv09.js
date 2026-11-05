function validarMontanhaRussa(){
    var alturaPessoa = 1.50
    var idadePessoa = 12
    var problemaCardiaco = false

    if(alturaPessoa >= 1.50 && idadePessoa >= 12 && !problemaCardiaco){
        console.log("voce pode ir");
        
    }
    else{
        console.log("vocr nao pode ir");
        
    }
}
validarMontanhaRussa()