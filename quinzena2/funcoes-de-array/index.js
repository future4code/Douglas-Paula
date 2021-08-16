// Exercícios de interpretação de código

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  //resposta)será impresso no console a lista completa do objeto usuarios.

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  //resposta)será impresso no console a lista dos nomes do objeto usuarios

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

//resposta)será impresso no console os apelidos da função usuarios diferentes de "Chijo"



//Exercícios de escrita de código

// 1) Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize
//    as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//  a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomeDoguinhos = pets.map((dogs) => {
    return dogs.nome
})
console.log(nomeDoguinhos)

//  b) Crie um novo array apenas com os [cachorros salsicha]

const cachorroSalsicha = pets.filter((dogs)=>{
    return dogs.raca === "Salsicha"
})
console.log(cachorroSalsicha)

//  c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//   A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const gerarMensagem = (dogs) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dogs.nome}!`
}
const filtrarRaca = (dogs) =>{
    return dogs.raca === "Poodle"
}
const mensagemPromo = pets.filter(filtrarRaca).map(gerarMensagem)
console.log(mensagemPromo)

// 2) Dado o seguinte array de produtos, realize as
//    operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2L", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item

const produtosNomes = produtos.map((nomes) =>{
    return nomes.nome
})
console.log(produtosNomes)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const novoPreco = produtos.map((item) => {

    return `nome: ${item.nome} preço: R$ ${item.preco - item.preco * 5 /100}`
})
console.log(novoPreco)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const produtosBebidas = produtos.filter((bebidas)=>{
    return bebidas.categoria === "Bebidas"
})
console.log(produtosBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const produtosYpe = produtos.filter((ypes)=>{
    return ypes.nome.includes("Ypê")
})
console.log(produtosYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


const ypePreco = produtosYpe.map((ypes) => {
    return `Compre ${ypes.nome} por R$ ${ypes.preco}`
})
console.log(ypePreco)