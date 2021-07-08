/*
01) Escreva uma função chamada somaFaturamento que recebe uma lista de números inteiros e devolve a soma destes valores.
*/

const list = [1, 2, 3, 4, 5];

function somaFaturamento(list) {
  let soma = 0;
  for(value of list) soma += value;
  return soma;
}

console.log(somaFaturamento(list));
console.log(' ');

/*
02) Um jovem programador tentou utilizar o laço de repetição for...of no objeto Casa na esperança de que o laço passasse por todas as propriedades deste objeto. No entanto, ele só recebeu o erro: TypeError: Casa[Symbol.iterator] is not a function. Por que não está funcionando?

Este foi o código que ele tentou executar:

var Casa = {
  metrosQuadrados: 4000,
  altura: 3000,
  nQuartos: 4,
  nBanheiros: 2

  //...
}

for(var atributo of Casa) {
  console.log(atributo);
}

R: O laço de repetição for...of só funciona com iteráveis (arrays).
*/

/*
03) Resolva o problema do Exercício 2 utilizando a estrutura for...in.
*/

const Casa = {
  metrosQuadrados: 4000,
  altura: 3000,
  nQuartos: 4,
  nBanheiros: 2
}

for(let atributo in Casa) {
  console.log(Casa[atributo]);
}

console.log(' ');

/*
04) Implemente o método percorreRuas que recebe uma lista de strings que representam nomes de ruas e um segundo parâmetro que também é um string, mas representa o nome da rua em que deve parar. Para cada rua percorrida, deve ser apresentada no console, como neste exemplo:

- percorreRuas(['Rua 1, Rua 2', 'Rua 3'], 'Rua 2') → 'Rua 1' , 'Rua 2'

Utilize o laço for...of e o break para não percorrer mais ruas que o necessário.
*/

const listaRuas = ['Rua 1', 'Rua 2', 'Rua 3'];

function percorreRuas(list, rua) {
  for(let i of list) {
    console.log(i);
    if(i === rua) break;
  }
}

console.log(percorreRuas(listaRuas, 'Rua 1'));
console.log(' ');

/*
05) Implemente o método 'percorreRuas' que recebe dois parâmetros:

- ruas: Lista de strings que presentam as ruas que serão percorridas (ex: 'Rua 1')
- ruaPerigosa: String que represeta o nome da rua que deve ser evitada

Faça com que o método percorra cada uma das ruas exibindo no console, menos para a ruaPerigosa. Utilize o for...of e o continue para fazer esta lógica.
*/

const ruas = ['Rua 1', 'Rua 2', 'Rua 3', 'Rua 4'];

function percorreRuas2(ruas, ruaPerigosa) {
  for(let rua of ruas) {
    if(rua === ruaPerigosa) continue;
    console.log(rua);
  }
}

console.log(percorreRuas2(ruas, 'Rua 3'));
console.log(' ');
