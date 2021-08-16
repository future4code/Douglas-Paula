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

    
       console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`)
    

           console.log("O computador ganhou!");
       } else if (pontuacaoUsuario === pontuacaoComputador) {
           console.log("Empate!");
       }
    
    } else {
    
       console.log("O jogo acabou.");
   }

