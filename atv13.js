function validarLoja(){
    var diaSemana = "segunda-feira"
    var horario = 18
    if(horario >= 8 && horario <=18){
        var validarHorario = true
    }
    if(diaSemana == "segunda-feira"||diaSemana == "terça-feira"||diaSemana == "quarta-feira"||diaSemana == "quinta-feira"||diaSemana == "sexta-feira"){
        var validarDiaSemana = true
    }
    if(validarDiaSemana == true && validarHorario == true){
        console.log("loja aberta");
        
    }
    else{
        console.log("loja fechada");
        
    }
}

validarLoja()