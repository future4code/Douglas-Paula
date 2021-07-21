//exercicio 1

/*const bool1 = true
const bool2 = false
const bool3 = !bool2 

let resultado = bool1 && bool2
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)//true

console.log("d. ", typeof resultado) //boleano

//exercicio 2/3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

//a função prompt retorna uma string, então ele deveria inserir Number para conseguir efetuar a soma.

const soma = primeiroNumero + segundoNumero

console.log(soma)

//exercicio 4

const idade = Number(prompt("idade"))
const idadeAmigo = Number(prompt("idade amigo"))
const resultadoIdade = (idade > idadeAmigo)
console.log("sua idade é maior do que a do seu melhor amigo?", resultadoIdade)
console.log(idade-idadeAmigo)

//Exercicio 5

const numPar = Number(prompt("numero par"))
console.log(numPar % 2 ==0)
//todos os numeros pares chegam no mesmo lugar. 

//se o usuario inserir um numero impar a respota será false.

//exercicio 6

//a)
const idade = Number(prompt("idade em anos"))
console.log(idade*12)
//b)
console.log(idade*365)
//c)
console.log(idade*8760)*/

//exercicio 7

const num1 = Number(prompt("numero 1"))
const num2 = Number(prompt("numero 2"))

console.log ("O primeiro numero é maior que segundo?",num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 == num2)
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2==0)
console.log("O segundo numero é divisível pelo primeiro?", num2 % num1==0)

