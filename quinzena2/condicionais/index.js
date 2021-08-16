// Exercícios de interpretação de código

//1)

// a) Explique o que o código faz. Qual o teste que ele realiza? 

//ele realiza uma condição de que se o numero for par ele retornará uma mensagem de "passou no teste."senão, "não passou no teste."

// b) Para que tipos de números ele imprime no console "Passou no teste"?

//Numeros pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"?

//Numeros impares.

//2)

// a) Para que serve o código acima?

//O codigo serve para informar ao usuario o valor de uma fruta, e caso o usuario informe uma fruta que não tem na lista, o preço será sempre 5.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

//O preço da fruta maça é R$2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console
//  se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário 
//  "BREAK PARA O ITEM c.")?

//O preço da fruta Pêra é R$5

//3)

// a) O que a primeira linha está fazendo?

//criando uma variavel com as informações que o usuario inserir.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//no caso do 10 a mensagem seria "esse numero passou no teste", no caso do -10 não iria imprimir nada.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

//sim, o erro será causado pois o console.log não conseguirá ler a variavel mensagem por não ter sido atribuido valor dentro do escopo.

//Exercícios de escrita de código

//1)

const idade = Number(prompt("Qual a sua idade?"))

if(idade >= 18){
    console.log("você pode dirigir.")
}else{
    console.log("você não pode dirigir.")
}

//2)

const turno = prompt("Qual turno você estuda?")

if(turno === "M"){
    console.log("Boa Dia!")
}else if(turno ==="V"){
    console.log("Boa Tarde!")
}else if(turno ==="N"){
    console.log("Boa Noite!")
}

//3)

const turno = prompt("Qual turno você estuda?")

switch(turno){
    case "M":
        console.log("Boa Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break 
    default:
        console.log("insira um turno correto")
}

//4)

let filme = prompt("Qual o gênero do filme?")

let precoIngresso = Number(prompt("Qual o valor do ingresso?"))

if(filme ==="fantasia" && precoIngresso < 15){
    console.log("Bom filme")
}else{
    console.log("Escolha outro filme :(")
}

//desafio

//1)

let filme = prompt("Qual o gênero do filme?")

let precoIngresso = Number(prompt("Qual o valor do ingresso?"))

if(filme ==="fantasia" && precoIngresso < 15){
    const lanches = prompt("Qual snack você vai comprar?")
    console.log("Bom filme")
    console.log(`Aproveite seu ${lanches}!`)
}else{
    console.log("Escolha outro filme :(")
}