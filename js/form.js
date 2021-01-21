var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    if(erros.length > 0){
       exibeMensagensDeErro(erros);
        return;
    }
   
        
    adicionaPacienteNaTabela(paciente);

    form.reset();

    //limpar msg erros
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});



function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}



function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    //controlar o html. Se preferir não precisa da var, basta colocar ().innerHTML


    //forEach é como o for - vai passar por cada item do array
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function obtemPacienteDoFormulario(form) {
    //cirar objeto (com caracteristicas)
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

   /* 
    var nomeTd = montaTd(paciente.nome, "info-nome") ;
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gorduraTd");
    var imcTd = montaTd(paciente.imc, "info-imc");
   */ 

    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
   
    td.classList.add(classe);

    return td;

/*  var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc; 
*/

}


function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Informe o nome do paciente");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

   // if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");

   
    if(!validaAltura(paciente.altura)){
        erros.push("Informe a Altura");
    } 

    /*if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");
    por ser só um comando no if, pode tirar as {} e deixar tudo em uma linha.*/

    if(paciente.gordura.length == 0){
        erros.push("Informe a gordura");
    }

    if(paciente.peso.length == 0){
        erros.push("Informe o Peso");
    }

    if(paciente.altura.length == 0){
        erros.push("Informe a Altura");
    }

    return erros;
}