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

         function resetInputs(){           ///RESETAR OS INPUTS
             cellNome.value =        '';
              cellCpf.value =        '';
               cellEmail.value =     '';
                cellTelefone.value = '';
                }
                  resetInputs()
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
    const cells = selecionarLinha.getElementsByTagName('td'); // Pega todos os elementos TD do elemento selecionarLinha
    
    const inputs = [corrigirNome, corrigirCPF, corrigirEmail, corrigirTelefone]; // Coloca os inputs em um array ordenado baseado no formulário do HTML
    const cell_valores = [0, 1, 2, 3]; // Passa a ordem que os elementos vão aparecer servir de base para alinhar os valores dos input com as células
    
    for (let i = 0; i < inputs.length; i++) { // Cria um loop baseado no número de inputs do formulário do HTML
    const input = inputs[i]; // Isola o input tratado na repetição em questão
    const cell_valor = cell_valores[i]; // Isola a ordem base da celular para servir de chave
    if (input.value.length > 0) { // Valida que o input isolado não está vazio
      cells[cell_valor].innerHTML = input.value; // Como o input não está vazio, coloca os valores na célula
    }
    }    
     
    /*
        Basicamente, os loops(for) então sendo usados para ler um input de cada vez, enquanto o loop(for) está executando
        o condicional(if) válida se o formulário não está vazio antes de colocar o corrigir a linha.

        Essa lógica é útil se você considerar que não pode apagar um dado registrado, somente atualizar
        Por exemplo, impede que a pessoa apague o CPF registrado, não impede que atualize, apesar de que há meios
        de burlar isso, colocando espaços(' '), já que são diferentes de zero

    */


    ///RESET DO O TEXTO DOS INPUTS
     function resetInputs() {
    inputs.forEach((input) => {
    input.value = '';
    });
    } 
    resetInputs()
    esconderRegistrarCorrigir()
    }




    






