let ID = 0;
const registrar = document.getElementById('registrar');
const corrigir = document.getElementById('corrigir');
const regBotao = document.getElementById('registrar__botao');
const corBotao = document.getElementById('corrigir__botao');
const cadastros = document.getElementById('cadastros');
let selectDiv = 0; 
let selectID = 0; 

regBotao.addEventListener('click', criar_cadastro);
corBotao.addEventListener('click', mudar_cadastro);


function passando_rodo(){
    let divs = document.querySelectorAll('.cadastros__item');
    for(let item of divs){
        item.addEventListener('click', demonstrar_cadastro);
    }
}

function mudar_classe(elemenento) {
    const classesElemento = elemenento.className.split(" ");
    classesElemento.pop();
    elemenento.className = classesElemento.join(" ");
} 


function criar_cadastro(){
    ID++;

    const registrarNome = document.getElementById('registrar__nome');
    const registrarNumero = document.getElementById('registrar__numero');
    const registrarEmail = document.getElementById('registrar__email');
    

    const div = document.createElement('div');
    div.setAttribute('id', `${ID}`);
    div.setAttribute('class', 'cadastros__item item');

    const spanNome = document.createElement('span');
    spanNome.setAttribute('id', `${ID}__nome`)
    spanNome.textContent = registrarNome.value;

    const spanNumero = document.createElement('span');
    spanNumero.setAttribute('id', `${ID}__numero`)
    spanNumero.textContent = registrarNumero.value;

    const spanEmail = document.createElement('span');
    spanEmail.setAttribute('id', `${ID}__email`)
    spanEmail.textContent = registrarEmail.value;


    div.appendChild(spanNome);
    div.appendChild(spanNumero);
    div.appendChild(spanEmail);
    cadastros.appendChild(div);

    registrarNome.value = '';
    registrarNumero.value = '';
    registrarEmail.value = '';

    passando_rodo();
}

function demonstrar_cadastro() {
    let oldSelectDiv = document.querySelectorAll('.select__item');
    if(oldSelectDiv[0] == undefined){
        console.log('Sem selecionados')
    }else{
        mudar_classe(oldSelectDiv[0]);
    };
    
    selectDiv = this;
    selectID = this.id
    selectDiv.setAttribute('class', 'cadastros__item item select__item');

    const corrigirNome = document.getElementById('corrigir__nome');
    const corrigirNumero = document.getElementById('corrigir__numero');
    const corrigirEmail = document.getElementById('corrigir__email');

    const textoNome = document.getElementById(`${selectID}__nome`).innerText;
    console.log(textoNome);
    
    corrigirNome.value = textoNome;
    corrigirNumero.value = document.getElementById(`${selectID}__numero`).innerText;
    corrigirEmail.value = document.getElementById(`${selectID}__email`).innerText;

    corrigir.style.display = "grid";
    registrar.style.display = "none";
}

function mudar_cadastro(){

    document.getElementById(`${selectID}__nome`).innerText = document.getElementById('corrigir__nome').value;
    document.getElementById(`${selectID}__numero`).innerText = document.getElementById('corrigir__numero').value;
    document.getElementById(`${selectID}__email`).innerText = document.getElementById('corrigir__email').value;

    let oldSelectDiv = document.querySelectorAll('.select__item');
    if(oldSelectDiv[0] == undefined){
        console.log('Sem selecionados')
    }else{
        mudar_classe(oldSelectDiv[0]);
    };

    corrigir.style.display = "none";
    registrar.style.display = "grid";
}