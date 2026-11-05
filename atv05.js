function validarDescontoCinema(){
    var dia = "quarta-feira"
    var clieteEstudante = false 

    if(dia == "quarta-feira" || clieteEstudante == true){
        console.log("voce tem desconto no cinema");
    }
    else{
        console.log("voce nao tem desconto")
    }
}

validarDescontoCinema()