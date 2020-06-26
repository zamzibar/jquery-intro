function consultarCep(){

    $('#barra_progresso').show();

    var cep = document.getElementById('cep').value;
    console.log(cep);
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    $.ajax({
        url : url,
        type : "GET",
        success: function(response){
            console.log(response);
            console.log(response.logradouro)

            
            //jquery - insere o html no elemento identificado pelo id logradouro
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#titulo_cep").html("CEP: "+cep);
            $('.cep').show();

            $('#barra_progresso').hide();       
            
            //js comum
            //document.getElementById('logradouro').innerHTML = endereco;
        }
    })

}

$(function(){
    $('.cep').hide();
    $('#barra_progresso').hide();
   
});