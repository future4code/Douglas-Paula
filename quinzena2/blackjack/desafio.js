/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Bem vindo ao jogo de Blackjack!");

    let iniciarJogo = confirm("Quer iniciar uma nova rodada?");
    
    if (iniciarJogo) {
       let carta1Usuario = comprarCarta();
    
       let carta2Usuario = comprarCarta();
    
       let carta1Computador = comprarCarta();
    
       let carta2Computador = comprarCarta();

       let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor;
    
       let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor;

       console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`);
    
       console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`)
    
       if (pontuacaoUsuario > pontuacaoComputador || pontuacaoComputador>21) {
           console.log("O usuário ganhou!");
       } else if (pontuacaoComputador > pontuacaoUsuario || pontuacaoUsuario>21) {
           console.log("O computador ganhou!");
       } else if (pontuacaoUsuario === pontuacaoComputador) {
           console.log("Empate!");
       }
    
    } else {
    
       console.log("O jogo acabou.");
   }



// confirm(
// 	"Suas cartas são ${carta1Usuario} ${carta2Usuario}. A carta revelada do computador é ${carta1Computador}." +
// 	"\n"+  // \n faz pular a linha
// 	"Deseja comprar mais uma carta?"
// )






// for(pontuacaoUsuario>21; pontuacaoComputador===21;){
//     console.log("O usuario perdeu!")
// }
// for(pontuacaoUsuario<=21; pontuacaoComputador>21;){
//     console.log("O usuario ganhou!")
// }



// if(carta1Usuario==="A" && carta2Usuario==="A"){
//     comprarCarta();
//     comprarCarta();
// }
// if(carta1Computador==="A" && carta2Computador==="A"){
//     comprarCarta();
//     comprarCarta();
// }