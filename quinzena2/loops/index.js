// Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor) 
//resposta:

//O coódigo faz uma repetição dentro do bloco.Enquanto o valor de i ser menor que 5 ele continuará repetindo, aumentando também 
//o valor de (valor)
//no console será impresso o valor 10.


// 2.Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a) O que vai ser impresso no console?

// será impresso no console apenas os números maiores que 18 do array de lista.

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o 
// `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

// Não é possivel usando o for...of...


// 3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// *
// **
// ***
// ****

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// Exercícios de escrita de código


// 1.Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um,
//  e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

let pets = Number(prompt("Digite a quantidade de pets que você tem:"))

let listaPets = [];

let nomePets;

if(pets == 0){
    console.log("Que pena! Você pode adotar um pet!")
}else{
    while(pets !== 0){
        nomePets = prompt("Digite o nome do pet: ")
        pets -= 1;
        listaPets.push(nomePets);
    }
    console.log(listaPets)
}



// 2.Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma
// função para cada um dos itens abaixo, realizando as operações pedidas:

let arrayOriginal = [20, 30, 50, 70, 11]

// a) Escreva um programa que **imprime** cada um dos valores do array original.
imprimirLista = () =>{
  for (let i = 0; i < arrayOriginal.length -0; i++){
    console.log(arrayOriginal[i])
  }
}
imprimirLista()

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

dividirLista = () =>{
  for (let i = 0; i < arrayOriginal.length -0; i++){
    console.log(arrayOriginal[i]/10)
  }
}
dividirLista()

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

criarListaPar = () =>{
  let arrayPar = []
  for(numero of arrayOriginal){
    if(numero % 2 === 0){
      arrayPar.push(numero)
    }
  }
console.log(arrayPar)
}
criarListaPar()


// // d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

for(let indice of arrayOriginal){
  console.log(`indice:`, indice)
  let posicao = arrayOriginal.indexOf(indice)
  let numero = indice.valueOf(posicao)
  console.log(`numero`, numero)
  console.log(`o elemento do index ${posicao +1} é:${numero}`)
}
console.log(`------------------------------------------------`)
// // e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

maiorLista = () =>{
  let maiorNumero = 0
  for(let i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] > maiorNumero){
      maiorNumero = arrayOriginal[i]
    }
  }
  return maiorNumero
}

MenorLista = () =>{
  let menorNumero = 0
  for(let i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] < menorNumero){
      menorNumero = arrayOriginal[i]
    }
  }
  return menorNumero
}
console.log(maiorLista())

console.log(MenorLista())


//DESAFIOS

//Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando".
//Ele deve ser jogado entre duas pessoas

// Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando 
// até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas 
// para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si.

// Um resumo das funcionalidades são:

// a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

// b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:

// - O número chutado, com a mensagem: `O número chutado foi: <número>`
// - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

// c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

console.log('iniciar!')
let i = 0
let numberComputer = Math.floor(Math.random()*10)
let numberPlayerTwo = (prompt("adivinhe o número que eu estou pensando..."))

while (Number(numberPlayerTwo) !== numberComputer && numberPlayerTwo !== null){
  i++
  console.log(`o número chutado foi: ${(numberPlayerTwo)}`)
  if(Number(numberPlayerTwo)< numberComputer){
    console.log("Errrouuu, é maior")
    numberPlayerTwo = (prompt("Adivinhe o número que estou pensando..."))
  }else if(Number(numberPlayerTwo)> numberComputer){
    console.log("Errrouuu, é menor")
    numberPlayerTwo = (prompt("Adivinhe o número que eu estou pensando..."))
  }
}

if (Number(numberPlayerTwo)=== numberComputer){
  console.log("acertou!")
}

console.log(`o numero de tentativas foi: ${i}`)