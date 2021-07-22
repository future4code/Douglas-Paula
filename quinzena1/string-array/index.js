//exercicio 1
let array
console.log('a. ', array) //o valor será undefined pois não foi atribuido valor a array

array = null
console.log('b. ', array) //o valor será null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //retornará o valor 11.

let i = 0
console.log('d. ', array[i])//retornará o primeiro valor de array, 3.

array[i+1] = 19
console.log('e. ', array)//Imprime o valor 11.

const valor = array[i+6]
console.log('f. ', valor)//retornará 9.

//exercicio 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)//SUBI NUM ÔNIBUS EM MIRROCOS , 27

//exercicio 3

const usuario = prompt("digite seu usuário")
const email = prompt("digite seu email")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(o),${usuario}!`)

//exercicio 4

let comidas = ["lasanha","batata","pizza","hamburguer","carne"]
console.log(comidas)
console.log(`Essas são as minhas comidas preferidas:`)
console.log(comidas[i,0])
console.log(comidas[i,1])
console.log(comidas[i,2])
console.log(comidas[i,3])
console.log(comidas[i,4])

let mudanca = prompt("qual é a sua comida preferida?")
comidas[1] = mudanca
console.log(comidas)

//exercicio 5

let listaDeTarefas = []

const comida = prompt("uma comida")
const musica = prompt("uma musica")
const carro = prompt("um carro")

listaDeTarefas.push(comida, musica, carro)
console.log(listaDeTarefas)

let tudo = Number(prompt("item a ser removido"))
tudo -=1
listaDeTarefas.splice(tudo,1)
console.log(listaDeTarefas)



