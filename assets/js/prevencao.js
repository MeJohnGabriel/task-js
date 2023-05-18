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
/*
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

*/ //NÃO CONSEGUI USAR COMO BASE PARA OS OUTROS COMANDOS, MAS ESSA FAZ TUDO TBM:



//BOTÃO REG.(cria linha)
const botaoRegistrar = document.getElementById('botaoRegistrar');
botaoRegistrar.addEventListener('click', adicionarCorpoTabela)  //corpotabela= elementos da tb(tr th ...)
//VARIAVEIS DOS INPUTS
 const cellNome = document.getElementById('campoNome');
  const cellCpf = document.getElementById('campoCPF');
   const cellEmail = document.getElementById('campoEmail');
    const cellTelefone = document.getElementById('campoTelefone');

    let contagem = 2   //N PODE COMEÇAR NO ZERO(NESSE CASO) - vídeo no ytb explicou;

    const formRegistro = document.getElementById('meuFormRegistrar')
 function adicionarCorpoTabela() {
     const linha = document.createElement('tr');
       linha.addEventListener('click', selecionarLinha);
     const linhaHead = document.createElement('th');
       linhaHead.innerText = contagem;
         contagem++;
      const regNome = insertCell(cellNome.value);
       const regCpf = insertCell(cellCpf.value);
        const regEmail = insertCell(cellEmail.value);
         const regTelefone = insertCell(cellTelefone.value);

         linha.appendChild(linhaHead);    //nova cab p/ tabela
         
          linha.appendChild(regNome);
          linha.appendChild(regCpf);     //'linha' se n definir = "tbody is not defined at HTMLButtonElement.adicionarCorpoTabela"                  
          linha.appendChild(regEmail);
          linha.appendChild(regTelefone);
    
         corpoTabela.appendChild(linha);        //msm ideia...

         function resettxt(){           ///DEIXAR OS INPUTS CLEAN
             cellNome.value =        '';
              cellCpf.value =        '';
               cellEmail.value =     '';
                cellTelefone.value = '';
                }
                  resettxt()
            }     
 
        function insertCell(value) {
             const celula = document.createElement('td');
             celula.innerText = value;
             return celula;
          }
         
         const seletorReg = document.querySelectorAll('tr');   //'querySelectorAll'seleciona varios elementos do documento HTML e css; tr

         seletorReg.forEach((reg) => {
         for( let i = 0; i < seletorReg.length; i++)
         reg.addEventListener('click', selecionarLinha);}
         );

         //ESCONDER TABELA USANDO TOGGLE 
    function toggleTabela() {
        var tabela = document.getElementById('minhaTabela'); 
         if (tabela) {
         if (tabela.style.display === 'none'){
         tabela.style.display = 'table';
         } else {
         tabela.style.display = 'none';
         }
        }
    }

function selecionarLinha() {

    this.classList.add('excluir_corrigir')
    selecionarLinha = this

    esconderRegistrarCorrigir()
}
const botaoExcluir = document.getElementById('botaoExcluir');
botaoExcluir.addEventListener('click', excluirLinha)

function excluirLinha(){
    corpoTabela.removeChild(selecionarLinha)
    esconderRegistrarCorrigir()
}

const botaoCorrigir = document.getElementById('botaoCorrigir');
botaoCorrigir.addEventListener('click', Corrigir)

const corrigirNome = document.getElementById('corrigirNome');
 const corrigirCPF = document.getElementById('corrigirCPF');
  const corrigirEmail = document.getElementById('corrigirEmail');
   const corrigirTelefone = document.getElementById('corrigirTelefone');
    const tabela_corrigir = document.getElementById('meuFormcorrigir')

//TROCAÇÃO TABELA by CLASS 'esconder'
function esconderRegistrarCorrigir(){
    meuFormCorrigir.classList.toggle('esconder')    
    meuFormRegistrar.classList.toggle('esconder')
    }

function Corrigir() {   ///DÚVIDA DE COMO ESTÁ SENDO USADO 'FOR' E 'IF' NESSA SITUAÇÃO 
    const cells = selecionarLinha.getElementsByTagName('td');
    
    const inputs = [corrigirNome, corrigirCPF, corrigirEmail, corrigirTelefone];
    const cell_valores = [0, 1, 2, 3];
    
    for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const cell_valor = cell_valores[i];    
    if (input.value.length > 0) {
      cells[cell_valor].innerHTML = input.value;
    }
    }    
     
    
    
function resettxt() {
    inputs.forEach((input) => {
    input.value = '';
    });
    } 
    resettxt()

    esconderRegistrarCorrigir()
    }




    






