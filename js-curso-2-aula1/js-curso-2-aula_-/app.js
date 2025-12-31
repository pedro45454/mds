let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

 function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
 };

function verificarChute() {
  function exibirMensagemInicial() { 
    function exibirMensagemInicial() { 
      exibirTextoNaTela('h1', 'Jogo do número secreto'); 
      exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
  }
  
  exibirMensagemInicial()
  
}
   let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ?  'tentativas' :  'tentativa';
   let mensagenTentativa = ` voce descobriu  o numero secreto  com ${tentativas} ${palavraTentativas}`;
   if (chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Acertou!');
               exibirTextoNaTela('p',mensagenTentativa);
          
      document.getElementById('reiniciar').removeAttribute('disabled');
              

       } else {
             if(chute > numeroSecreto)  {
               exibirTextoNaTela('p','o numero secreto e menor');
             }else{
               exibirTextoNaTela('p','o numero secreto e maior'); 
               
                     
               };
limparCampo('')       }tentativas++ 
       
};
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);

}
function limparCampo(){
  chute = document.querySelector('input')
  chute.value = ''

}
tentativas ++

   


