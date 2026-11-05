function validarAluno(){
    var nota = 6
    var frequencia = 74
    var trabalhoExtra = true

    if((nota >= 7 && frequencia >= 75)||(nota < 7 && trabalhoExtra == true && frequencia >=75)){
        console.log("aluno aprovado ");
        
    }
    else{
        console.log("aluno reprovado");
        
    }
}

validarAluno()