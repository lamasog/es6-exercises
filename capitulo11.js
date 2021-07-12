/*
01) Refatore o seguinte código para usar as vantagens oferecidas pelo ES6 em relação a objetos literais.

var modelo = 'Mercedes-Benz Monobloco O-371 RSL';
var ano = 1993;
var capacidade = 50;

var acelerar = function() {
  console.log('vrum vrum');
}

var busao = {
  modelo: modelo,
  ano: ano,
  capacidade: capacidade,
  acelerar : acelerar
}

busao.acelerar(); // vrum vrum
*/

const modelo = 'Mercedes-Benz Monobloco O-371 RSL';
const ano = 1993;
const capacidade = 50;

const busao = {
  modelo,
  ano,
  capacidade,
  acelerar() {
    console.log('vrum vrum')
  }
}

busao.acelerar();
console.log(' ');

/*
02) Refatore o código abaixo com o que foi aprendido até agora.

var dimensoes = function(comprimento, alturaInicial) {
  var altura = alturaInicial * 9 /16;
  return { comprimento : comprimento, altura : altura };
}

console.log(dimensoes(10,10)); // { comprimento: 10, altura: 5.625 }
*/

const dimensoes = (comprimento, alturaInicial) => {
  return { 
    comprimento, 
    altura: alturaInicial * 9 /16 
  };
}

console.log(dimensoes(10,10));
console.log(' ');

/*
03) Refatore o código a seguir para inserir o método seApresentar para dentro do objeto pessoa. Ela deve exibir o nome da pessoa.

const pessoa = {
  nome: 'Goku',
  equipe: 'Guerreiro Z'
}

function seApresentar(pessoa) {
  console.log('Oi, eu sou o ' + pessoa.nome + '!');
}

seApresentar(pessoa); // Oi, eu sou o Goku!
*/

const pessoa = {
  nome: 'Goku',
  equipe: 'Guerreiro Z',
  seApresentar() {
    console.log(`Oi, eu sou o ${this.nome}!`);
  }
}

pessoa.seApresentar();
console.log(' ');

/*
04) Implemente o método criaObjetoComCaracteristicas quer recebe o seguinte parâmetro:

caracteristicas: Mapa que representa os atributos e valores do objeto (Ex: idade, 25)
O método deve devolver um objeto literal que possua as características representadas no mapa. Para este exercício, não vamos considerar funções.
*/

const caracteristicas = new Map();
caracteristicas.set('idade', 25);
caracteristicas.set('ocupacao', 'Estudante');

function criaObjetoComCaracteristicas(caracteristicas) {
  const objetoLiteral = {};

  for(let caracteristica of caracteristicas.keys()) {
    objetoLiteral[caracteristica] = caracteristicas.get(caracteristica)
  }
  
  return objetoLiteral;
}

console.log(criaObjetoComCaracteristicas(caracteristicas));
console.log(' ');

/*
05) Responda: O que é um JSON?
R: O JavaScript Object Notation (JSON) é um formato leve, criado
como subconjunto da notação de objetos literais do JavaScript,
para troca de dados. 
*/