//exercício de interpretação

let a = 10
let b = 10

console.log(b) //vai mostrar no console o valor de b 10

b = 5
console.log(a, b) //o valor de b foi alterado, então vai mostrar 10, 5

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c) //o valor final no console será 10,10,10

let p = prompt("Quantas horas você trabalha por dia?") //horasDia
let t = prompt("Quanto você recebe por dia?") //valorDia
alert(`Voce recebe ${t/p} por hora`) //horasDia/valorDia

//Exercícios de escrita de código

//exercicio 1

let nome
let idade
console.log(typeof nome, idade)
//não foi impresso pois não foi definido valor a variavel

let nomeUsuario = prompt("qual é o seu nome?")
let idadeUsuario = prompt("qual a sua idade?")
console.log(typeof nomeUsuario) 
console.log(typeof idadeUsuario)//notei que ambos retornam string 

console.log("olá", nomeUsuario, "você tem", idadeUsuario,"anos.")

//exercicio 2

let perguntaA = prompt("você já tomou banho hoje?")
let perguntaB = prompt("você já comeu hoje?")
let perguntaC = prompt("você já está vacinadah?")

console.log("você já tomou banho hoje?", perguntaA)
console.log("você já comeu hoje?", perguntaB)
console.log("você já está vacinadah?", perguntaC)

//exercicio 3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", b) // O novo valor de a é 25 
console.log("O novo valor de b é", a) // O novo valor de b é 10
//a forma leiga que eu encontrei foi trocando a por b

//outra opção seria criar o C

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
c = b
b = a
a = c 
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25 
console.log("O novo valor de b é", b) // O novo valor de b é 10

//Desafio

let primeiroNumero = Number(prompt("primeiro número"))
let segundoNumero = Number(prompt("segundo número"))

console.log("O primeiro número somado ao segundo número resulta em:", (primeiroNumero + segundoNumero))
console.log("O primeiro número multiplicado pelo segundo número resulta em:", (primeiroNumero*segundoNumero))