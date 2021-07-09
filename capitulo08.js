/*
01) Considere o trecho de código abaixo e responda as questões:

var arrayFuncoes = [];
for(var i = 0; i < 10; i++){
  arrayFuncoes.push(function(){
    console.log(i);
  });
}

arrayFuncoes.forEach(function(funcao){
  funcao();
});


a) Quais os valores são exibidos no console na execução desse código? 
b) Como podemos ajustar o comportamento desta função utilizando ES6?

R:
a) Uma sequência de dez 10.
b) Apenas substituindo var por let.
*/

let arrayFuncoes = [];
for(let i = 0; i < 10; i++){
  arrayFuncoes.push(function(){
    console.log(i);
  });
}

arrayFuncoes.forEach(function(funcao){
  funcao();
});

/*
02) Uma prática comum dos desenvolvedores é deixar o nome das variáveis que representam constantes em caixa alta. Como por exemplo, uma variável que armazena uma chave de API de um webservice. Com o ES6, temos uma maneira melhor de representar isso. Que maneira é essa?

R: const
*/

/*
03) Um programador júnior de uma empresa de software está tentando executar o seguinte código:

function nomeCompleto(primeiroNome, segundoNome){
  const nomeCompleto = primeiroNome;
  nomeCompleto += ' ' + segundoNome;

  return nomeCompleto;
}
Ele não consegue entender o que está fazendo de errado. No que ele está errando?

R: Atribuindo um novo valor a uma constante.
*/

/*
04) Uma jovem programadora pensou que havia entendido como funcionava a declaração de variáveis com let e const até ver o seguinte trecho de código:

const jogador = {};
jogador.nome = 'Rodrigo';
jogador.idade = 33;

console.log(jogador.nome  + '_' +  jogador.idade); // saída: Rodrigo_33

Ela achou que este código não funcionaria, pois havia entendido que não era possível colocar novos valores em variáveis declaradas com const. Por que este código funciona sem problemas?

R: Pois a referência à constante não recebeu um novo valor. É possível atribuir novos valores às propriedades de uma constante, desde que não se altere sua referência.
*/

/*
05) O que significa o Temporal Dead Zone? Qual sua relação com o Hoisting?

R: TDZ significa que a variável (let ou const) é inacessível até que a execução alcance a sua declaração, ou seja, a declaração de variáveis não têm o comportamento de Hoisting.
*/

/*
06) Refatore o código a seguir utilizando o const e let.

var status = [
  { codigo: 'OK', resposta: 'Sucesso' },
  { codigo: 'FAILED', resposta: 'Erro' },
  { codigo: 'PENDING', resposta: 'Pendente' }
];
var mensagem = '';
var codigoAtual = 'OK';

for (var i = 0; i < status.length; i++) {
  if (status[i].codigo === codigoAtual) {
    mensagem = status[i].resposta;
  }
}

console.log(mensagem);
*/

const status = [
  { codigo: 'OK', resposta: 'Sucesso' },
  { codigo: 'FAILED', resposta: 'Erro' },
  { codigo: 'PENDING', resposta: 'Pendente' }
];
let mensagem = '';
const codigoAtual = 'OK';

for (let i = 0; i < status.length; i++) {
  if (status[i].codigo === codigoAtual) {
    mensagem = status[i].resposta;
  }
}

console.log(mensagem);



