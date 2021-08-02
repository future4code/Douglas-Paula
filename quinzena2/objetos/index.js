//Aula 07 - Objetos

//## Exercício

//Exercícios de interpretação de código

//1)
//a)será impresso no console o indice 0 do elenco, que será Matheus Nachtergaele, depois será impresso o 
//nome Virginia Cavendish e por final será impresso canal:Globo horario:14h

//2)
//a)no console log cachorro irá informar nome:juca idade:3 raca:srd
//no console log gato será herdado o todas as informações do cachorro porem substituindo o nome por Juba
//no console log tartaruga será substituido o A pelo O no nome Juba, ficando Jubo

//b)A sintaxe faz um espalhamento, uma herança, ele pega as informações e a transforma.

//3)

//a) Vai ser impresso false e undefined pois altura não foi definido.

//b)o valor altura não foi definido.

//Exercícios de escrita de código

//1)

//a)

const usuario = {
    nome: "Douglas",
    apelido: [" makaoshi", " dodonas", " makafrinstons"],
    imprimir:() => {
    console.log(`eu sou ${usuario.nome}, mas pode me chamar de:${usuario.apelido}`)
    }
}
usuario.imprimir()


//b)

const usuarioApelidos = {
    ...usuario,
    apelido:["makajooj", "dougdodonas", "skrami"],
    imprimir:() => {
        console.log(`eu sou ${usuarioApelidos.nome}, mas pode me chamar de:${usuarioApelidos.apelido}`)
    }
}
usuarioApelidos.imprimir()

//2)
//a)
const ficha1 = {
    nome: "Douglas",
    idade: 28,
    profissao: "Estudante",
}

const ficha2 = {
    nome: "Ingrid",
    idade: 26,
    profissao: "Instrutora",
}

//b)

imprimirInformacoes = (pessoas) =>{
    let array = []
    const nome  = pessoas.nome
    const caracteresNome = pessoas.nome.length
    const idade = pessoas.idade
    const profissao = pessoas.profissao
    const caracteresProfissao = pessoas.profissao.length
    
    array.push(nome, caracteresNome, idade, profissao, caracteresProfissao)
    console.log(array)
}

imprimirInformacoes(ficha1)
imprimirInformacoes(ficha2)


let carrinho = []

//3)
//a)

const fruta1 = {
    nome: "banana",
    disponibilidade: true,
}
const fruta2 = {
    nome: "maçã",
    disponibilidade: true,
}
const fruta3 = {
    nome:"uva",
    disponibilidade: true,
}

//c)
//d)
function adicionarFruta(){
    carrinho.push(fruta1, fruta2, fruta3)
}
adicionarFruta()
console.log(carrinho)


///DESAFIO
imprimirObjeto = () => {
    const pessoa ={
        nome: prompt("Digite seu nome"),
        profissao: prompt("Digite sua profissão"),
        idade: prompt("Digite a sua idade"),
    }
    console.log(pessoa, typeof(pessoa));
}
imprimirObjeto();