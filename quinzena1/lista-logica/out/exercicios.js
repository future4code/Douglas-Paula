// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('altura')
  const largura = prompt('largura')

  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
// escreva seu código aqui
const anoAtual = prompt('ano atual:')
const anoNascimento =  prompt('ano de nascimento:')

console.log( Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
// escreva seu código aqui
const  peso = prompt('peso em kg:')
const  altura = prompt('altura:')

console.log(Number(peso)/Number(altura*altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
// escreva seu código aqui
const nome = prompt('nome:')
const idade = prompt('idade')
const email = prompt('email')

console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('cor1')
  const cor2 = prompt('cor2')
  const cor3 = prompt('cor3')

  console.log([cor1 + "","" + cor2 + "","" + cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const letra = prompt("letra")

  console.log(letra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let preçoEspetaculo = prompt("preço do espetaculo:")
  const valorIngresso = prompt("valor do ingresso:")

  console.log(Number(preçoEspetaculo) / Number(valorIngresso))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const letra1 = prompt("letra1")
  const letra2 = prompt("letra2")

  if ((letra1.length) == (letra2.length)) {
    console.log(true);
  }
  else{
    console.log(false);
  }
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const letra1 = prompt("letra1")
  const letra2 = prompt("letra2")
  
  if ((letra1.toUpperCase()) == (letra2.toUpperCase())) {
    console.log(true);
  }
  else{
    console.log(false);
  }
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = (prompt('Digite o ano atual: '));
  const anoNascimento = (prompt('Digite o ano que você nasceu: '));
  const anoEmissao = (prompt('Digite o ano que sua identidade foi emitida: '));
  const idadePessoa = (Number(anoAtual-anoNascimento));
  const idadeRg = (Number(anoAtual-anoEmissao));
  if(idadePessoa <= 20 && idadeRg >= 5){
    console.log(true);   
  }
  else if(idadePessoa > 20 && idadePessoa <= 50 && idadeRg >= 10){
    console.log(true);
  }
  else if(idadePessoa > 50 && idadeRg >= 15){
    console.log(true);
  }
  else {
    console.log(false);
  }
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = prompt("ano:");
  const bissexto = (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0);
  const naoBi = (ano % 100 != 0) && (ano % 4 == 0) || (ano % 400 == 0) ;

  console.log(bissexto)
  console.log(naoBi)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idade = prompt('tem mais de 18?: ')
  const formacao = prompt('tem ensino médio completo?: ')
  const disponibilidade = prompt('tem disponibilidade de horários?: ')

  if(idade == 'sim' && formacao == 'sim' && disponibilidade == 'sim'){
    console.log(true);
  }
  else {
    console.log(false);
  }

}