let listaDeNumerosSorteados = [];
let numeroLimite = 51
let numeroSecreto = gerarNumero();
console.log('Número secreto (inicial):', numeroSecreto);
let tentativas = 1 ;function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.5; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}   exibirTextoNaTela('h1','ola bem vindo  a o jogo');
  exibirTextoNaTela('p','chute o numero secreto');
function exibirMensagemInicial(){
 exibirTextoNaTela('h1','ola bem vindo  a o jogo');
    exibirTextoNaTela('p','chute o numero  secreto');
}

function verificarChute (){
    let chute = parseInt(document.querySelector('input').value, 10);

    console.log(`Chute: ${chute} | Secreto: ${numeroSecreto}`);

     let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';

    let mensagemTentativa = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}`;

    if(numeroSecreto == chute){

    exibirTextoNaTela('h1','parabéns');

    exibirTextoNaTela('p',`Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}!`);

    document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(numeroSecreto < chute){

        exibirTextoNaTela('p','o numero secreto é menor');

        exibirTextoNaTela('h1','você errou tente novamente');
        }
    
        if(numeroSecreto > chute){

        exibirTextoNaTela('p','o numero secreto é maior');

        exibirTextoNaTela('h1','você errou tente novamente');

    }
 limparCampo();

}tentativas++;
}
function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1 );

    let quantidadeDeNumeroNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeNumeroNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){

        return gerarNumero();
}else{

        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }}
function limparCampo(){
    let campo = document.querySelector('input');
    if (campo) {
        campo.value = '';
    }
    
}

function reiniciarJogo() {

    numeroSecreto = gerarNumero();

    limparCampo();

    tentativas = 1;

    document.getElementById('reiniciar').setAttribute('disabled', true);

    exibirMensagemInicial();

    console.log('Número secreto (reiniciado):', numeroSecreto);

}

