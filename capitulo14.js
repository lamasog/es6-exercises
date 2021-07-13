/*
01) Refatore o código a seguir para utilizar o operador Spread no método log do console.

console.log('e','c','m','a','s','c','r','i','p','t');
*/

const ecmascript = 'ecmascript';
console.log(...ecmascript);

/*
02) Qual a diferença básica entre os operadores Rest e Spread?

R: O operador Rest acumula uma quantidade indefinida de parâmetros em um array; o operador Spread faz o contrário.
*/

/*
03) Implemente o método contaQuantidadeVogaisNaoAcentuadas que recebe um número indeterminado de palavras e retorna para o usuário o número total de vogais não acentuadas encontradas. Para este exercício, Considere somente palavras em minúsculo.
*/

function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
  let qtdVogais = 0;
  for(let palavra of palavras) {
    let palavraMinuscula = palavra.toLowerCase();
    const letras = [...palavraMinuscula];

    for(let letra of letras) {
      if("aeiou".indexOf(letra) !== -1)
        qtdVogais++;
    }
  }

  return qtdVogais;
}

console.log(contaQuantidadeVogaisNaoAcentuadas('hector', 'lamas'));

/*
04) Como podemos refatorar o código a seguir sem utilizar os benefícios do ECMAScript 6?

var argumentos = [1,2,3];
console.log(argumentos[0], argumentos[1], argumentos[2]);
// 1, 2, 3
*/

var argumentos = [1,2,3];
console.log.apply(console, argumentos);

/*
05) Refatore o código a seguir para utilizar o operador Spread ao invés do método concat.

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = equipeMarketing.concat(equipeComercial);

realizaBrainstorm(timeCompleto);
*/

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = [...equipeMarketing, ...equipeComercial];

console.log(timeCompleto);