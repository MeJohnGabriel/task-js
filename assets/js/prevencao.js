function garantia(){
    let buttons = document.querySelectorAll('.btn')
    for(let item of buttons){
        item.addEventListener('click', prevencao);
    }
}


function prevencao(e){
    e.preventDefault()
};

window.onload = garantia()

/*
    Explicando esse script

    Como está com Bootstrap, ao clicar nos botões, a página recarrega, então para previnir que a página faça isso, coloquei para que todos os botões, ao serem clicados não reiniciem a página.

    Assim vocês podem fazer todas alterações sem perder dados os dados no console.

*/


function adicionar(){
    console.log("testandocontagem")
    
    
    contagem++
    const contagemNum = document.createElement('th')
    contagemNum.textContent = contagem
    

    let nome = document.getElementById("campoNome").value;
    let cpf = document.getElementById("campoCPF").value;
    let email = document.getElementById("campoEmail").value;
    let telefone = document.getElementById("campoTelefone").value;
    let tabela = document.getElementById("corpoTabela").innerHTML;

    tabela += "<td>" +contagem+ "</td>" 
    tabela += "<td>" +nome+ "</td>" 
    tabela += "<td>" +cpf+ "</td>" 
    tabela += "<td>" +email+ "</td>" 
    tabela += "<td>" +telefone+ "</td>" 
    document.getElementById("corpoTabela").innerHTML = tabela;
        

    }
    let contagem = 1 

function toggleTable() {
    var table = document.getElementById("minhaTabela");
    table.classList.toggle("esconder");
}



    
  