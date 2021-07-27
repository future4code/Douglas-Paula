//Exercícios de interpretação de código

//exercício 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) será impresso 10 e 50

//b)acontecerá um erro.

//exercício 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a)Identificar se no texto tem a palavra cenoura idependente do maiusculo ou minusculo

//b)true,true,true

//Exercícios de escrita de código

//exercício 1

//a)

function mensagem(){
    console.log(`Eu sou Douglas, tenho 28 anos, moro em Bh e sou estudante.`)
}
mensagem()

//b)

function informacoes(nome, idade, endereco, estudante){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${estudante}.`)
}
informacoes("Laís", 23, "São Paulo", "instrutora")

//exercício 2

//a)

function numeros(num1, num2){
    const soma = num1 + num2;
    return soma;
}
console.log(numeros(2,3));

//b)

function numerosBooleano(bol1, bol2){
    const maiorOuIgual = bol1 >= bol2;
    return maiorOuIgual;
}
console.log(numerosBooleano(12,2));

//c)

function parOuNao(pares){
    const ehpar = pares % 2 ==0;
    return ehpar;
}
console.log(parOuNao(11));

//d)

function medirMensagem(string){
    const tamanho = string.toUppercase()
    console.log(string.lenght, tamanho);
}
medirMensagem("Hoje eu acordei feliz!");

//exercício 3

const inserirNumero1 = Number(prompt("numero 1"))
const inserirNumero2 = Number(prompt("numero 2"))

function somar(){
    const resultadoSoma = inserirNumero1 + inserirNumero2
    console.log(`a soma dos dois numeros é ${resultadoSoma}`)
}

somar(inserirNumero1, inserirNumero2)

function subtrair(){
    const resultadoSubtracao = inserirNumero1 - inserirNumero2
    console.log(`a subtração dos dois numeros é ${resultadoSubtracao}`)
}
subtrair(inserirNumero1, inserirNumero2)

function multiplicar(){
    const resultadoMultiplicacao = inserirNumero1 * inserirNumero2
    console.log(`a multiplicação dos dois numeros é ${resultadoMultiplicacao}`)
}
multiplicar(inserirNumero1, inserirNumero2)

function dividir(){
    const resultadoDivisao = inserirNumero1 / inserirNumero2
    console.log(`a divisão dos dois numeros é ${resultadoDivisao}`)
}
dividir(inserirNumero1,inserirNumero2)

