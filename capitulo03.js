/* 
01) Altere o código a seguir para utilizar o método forEach de modo que a saída permaneça a mesma.

var numeros = [0,1,2,3,4,5];
for(var i = 0; i<= numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
}

saída:
0 é par
1 é ímpar
2 é par
3 é ímpar
4 é par
5 é ímpar
*/

const numeros = [0, 1, 2, 3, 4, 5];

numeros.forEach((numero) => {
  if(numero % 2 === 0) return console.log(`${numero} é par`);
  return console.log(`${numero} é ímpar`);
})

console.log(' ');

/* 
02) Utilizando o método map, escreva o método dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.
*/

const numbers = [1, 2, 3];
const double = numbers.map((number) => number * 2);
console.log(double);

console.log(' ');

/*
03) Escreva o método caps que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.
*/

const words = ['oi', 'tudo', 'bem?'];
const caps = words.map((word) => word.toUpperCase());
console.log(caps);

console.log(' ');

/*
04) Utilizando a função auxiliar reduce, escreva uma função chamada validaParenteses que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve aceitar uma string e retornar um valor booleano (true ou false).

Exemplo: validaParenteses(')((()()())))'); → false
Exemplo: "()()()" → true
Exemplo: ")(" → false
*/

const parenthesesArray = ['(', ')', '(', ')'];

function validParentheses(parenthesesArray) {
  let sum = parenthesesArray.reduce((sum, parentheses) => {
    if((sum % 2 === 0) && parentheses === '(') return sum + 1;
    if((sum % 2 !== 0) && parentheses === ')') return sum + 1;
    else return sum = -1000;
  }, 2);

  if(sum > 0) isValid = true;
  else isValid = false;
  console.log(isValid);
}

validParentheses(parenthesesArray);
console.log(' ');

/* 
05) Faça uma função chamada removeDuplicatas que recebe um array de números inteiros e remove todas as suas duplicadas.

Utilize as funções auxiliares: reduce e find.

Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]
*/

const numbers2 = [1, 2, 3, 4, 4, 5, 5];

function removeDuplicates(numbers) { 
  return numbers.reduce((notDuplicated, number) => {
    let value = notDuplicated.find((value) => number === value)
    if(!value) notDuplicated.push(number);
    return notDuplicated;
  }, []);
}

console.log(removeDuplicates(numbers2));
console.log(' ');

/*
06) Dada uma lista de objetos que contém o nome de um aluno e sua média final, crie o método 'aprovados' que recebe esta lista e retorna somente os alunos que foram aprovados.

Para isto, utilize o método filter.
*/

const alunos = [
  { nome: 'Diogo', media: 5.5 },
  { nome: 'Julia', media: 9.5 },
  { nome: 'Roberto', media: 1.5 },
  { nome: 'Tiago', media: 6.0 }
];

let alunosAprovados = alunos.filter((aluno) => aluno.media > 5.0);
console.log(alunosAprovados);
console.log(' ');

/*
07) Crie uma função buscar que recebe três parâmetros:

- propriedade: Nome da propriedade no objeto
- valor: Valor da propriedade no objeto
- lista: Lista de objetos onde a busca deve ser executada

Dado estes parâmetros, a função deve buscar na lista e retornar o registro que possui a propriedade com o valor especificado.

Utilize o método find.
*/

const lista = [
  { nome: 'Geovana', sobrenome: 'Lamas', idade: 24 },
  { nome: 'Felipe', sobrenome: 'Scolari', idade: 27 },
  { nome: 'Hector', sobrenome: 'Lamas', idade: 4 },
  { nome: 'Kovu', sobrenome: 'Fedido', idade: 1 }
]

function searchBy(property, value, list) { 
  return list.find((object) => object[property] === value);
}

console.log(searchBy('idade', 4, lista));
console.log(' ');

/*
08) Crie uma função calculaAreaTotal que recebe um parâmetro:
- dimensoes: objeto que possui as propriedades altura e comprimento que são números inteiros

A função deve retornar a soma de todas as áreas.
*/

const dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
]

function calculateTotalArea(dimensions) {
  return dimensions.reduce((sum, object) => {
    return sum += object.altura * object.comprimento;
  }, 0);
}

console.log(calculateTotalArea(dimensoes));
console.log(' ');

/*
09) Crie uma função chamada calculaRaizesQuadradas que recebe um array de números inteiros positivos e devolve um outro array com as raízes quadradas correspondentes de cada um dos itens.

- para este exercício, assuma que a entrada terá somente números com raiz exata.
- utilize a função Math.sqrt para calcular a raiz quadrada
*/

const numbers3 = [4, 9, 16, 25, 36];

function calculateSquareRoot(numbers) { 
  return numbers.map((number) => Math.sqrt(number));
}

console.log(calculateSquareRoot(numbers3));
console.log(' ');

/*
10) Diga, em poucas palavras, qual a diferença entre os métodos auxiliares forEach e map.

R: com forEach é possível percorrer e manipular todos os elementos de um array somente dentro de cada iteração, e com Map podemos receber um novo array com as modificações como retorno.
*/

/*
11) Utilizando o método auxiliar forEach, crie uma função clonaObjeto que recebe como parâmetro um objeto e cria uma cópia exata dela.

- utilize o método Object.getOwnPropertyNames para obter as propriedades do objeto
*/

const object = {
  name: 'Cthulhu',
  year: 1928,
  autor: 'Lovecraft',
}

function cloneObject(object) {
  const properties = Object.getOwnPropertyNames(object);
  const clone = {};
  properties.forEach((property) => clone[property] = object[property]);
  return clone;
}

console.log(cloneObject(object));

/*
12) Crie um método chamado existeProdutosDatados que recebe um parâmetro chamado produtos que é um array de produtos e identifica se há algum produto que está acima da data de validade. Caso existe, deve voltar true, caso contrário, false. Cada produto tem as seguintes características:

- nome: String que representa o nome do produto
- preco: Número que representa o preço do produto
- dataValidade: Data de validade do produto

O método também deve aceitar um segundo parâmetro dataReferencia. Se passado, o método deve fazer a comparação de validade em relação a ele, caso contrário, utiliza a data da execução como parâmetro.
*/

const produtos = [
  { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
  { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
  { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
]

function outdatedProducts(produtos, date) {
  let dateNow = new Date();
  if(date) dateNow = new Date(date);
  return produtos.some((product) => new Date(product.dataValidade) < dateNow);
}

console.log(outdatedProducts(produtos, Date.now()));

