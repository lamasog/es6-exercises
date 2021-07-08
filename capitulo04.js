/*
01) Implemente uma função chamada calculaDistancia que recebe uma lista de objetos que representam ruas e faça a soma de seus tamanhos. Cada objeto rua da lista possui as seguintes propriedades:

- nome: String que representa o nome da rua
- tamanho: Número intero que representa a comprimento da rua em metros

Utilize somente os conceitos que foram apresentados neste capítulo para iterar as ruas. Assuma que sempre haverá pelo menos uma rua no array.
*/

const ruas = [
  { nome:'Rua 1', tamanho: 2500 },
  { nome:'Rua 2', tamanho: 3400 },
  { nome:'Rua 3', tamanho: 1400 }
];

function calculateDistance(ruas) {
  let iterator = ruas[Symbol.iterator]();
  let next = iterator.next();
  let sum = 0;

  do {
    sum += next.value.tamanho;
    next = iterator.next();
  } while(!next.done)

  return sum;
}

console.log(calculateDistance(ruas));
console.log(' ');

/*
02) Desenvolva a função 'isListaVazia' que recebe como parâmetro uma lista de números inteiros qualquer e retorna o valor true caso esta lista não tenha nenhum item e false para os demais resultados. A lógica deve ser feita usando somente a propriedade done do objeto que é obtido ao executar o next no iterador do array.
*/

const list = [1, 2, 3];

function isEmptyList(list) {
  return list[Symbol.iterator]().next().done;
}

console.log(isEmptyList(list));
console.log(' ');

/*
03) Utilizando os aprendizados deste capítulo, implemente a função soletraPalavra que recebe como único parâmetro uma String e então exibe cada letra da String em uma linha do console.
*/

const word = 'Piolho';

function soletraPalavra(word) {
  let iterator = word[Symbol.iterator]();
  let letter = iterator.next();

  do {
    console.log(letter.value);
    letter = iterator.next();
  } while(!letter.done);
}

soletraPalavra(word);
console.log(' ');

/*
04) Crie o método 'criaIterador' que recebe como parâmetro uma lista e então o devolve um objeto que possui o mesmo comportamento de um iterador, ou seja, que possui o método next que toda vez que invocado, retorna um objeto com as propriedades: value e done.
*/

const list2 = [1, 2];

function createIterator(list) {
  let nextIndex = 0;

  return {
    next: () => {
      if(nextIndex < list.length)
        return { value: list[nextIndex++], done: false };
      return { value: undefined, done: true };
    }
  };
}

console.log(createIterator(list2).next());