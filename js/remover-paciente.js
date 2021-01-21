var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
        
    if (event.target.tagName == "TD"){
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    }
    

    //parentNode - para acessar o pai do target
})




/*  pacientes.forEach(function(paciente){
        paciente.addEventListener("dblclick", function(){
            console.log("duplo click");
            this.remove();
            //this está atrelado a quem está escutando o evento(dono do evento), que no caso é o dblclick
        });
    });
*/