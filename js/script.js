$(document).ready(function(){
    $("#awnser").submit(function(e){
        e.preventDefault();

        console.log($("[data-resultado='true")[0]);
        
        const resultado = {
            selecionado: $("input:checked")[0],
            certo: $("[data-resultado='true")[0],
        }

        if(resultado.selecionado == resultado.certo){
            $(resultado.selecionado).parent().css("background", "green")
        }else{
            $(resultado.selecionado).parent().css("background", "red")
            $(resultado.certo).parent().css("background", "green")
        }
    })
});