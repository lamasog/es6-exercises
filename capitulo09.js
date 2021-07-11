/*
01) Utilizando Templates Literais Marcadas, crie uma tag que transforma uma String que representa uma lista de compras (divididas por vírgula) em um elemento de lista HTML (<ul> com <li>).

Por exemplo:

const compras = ‘leite,feijão,arroz,mandioca’;
var elemento = tag`${compras}`;

console.log(elemento)
// <ul><li>leite<li><li>feijão<li><li>arroz<li><li>mandioca<li></ul>
*/

/*
02) Implemente o método criaMacaroca que recebe como parâmetro uma lista de strings. O método deve retornar uma única string que é o resultado de todos os itens do array concatenados. É obrigatório a utilização de template string.

Exemplo: criaMacaroca(['a','b','c', 'd']) → abcd
*/

const list = ['a', 'b', 'c', 'd'];

function criaMacaroca(list) {
    let frase = '';
    for(let letra of list)
      frase = `${frase}${letra}`;
    return frase;
}

console.log(criaMacaroca(list));
console.log(' ');

/**
03) Implemente o método montaEnderecoCompleto que recebe os seguites parâmetros:

- rua: String que reprenta o nome de uma rua
- cidade: String que representa o nome de uma cidade
- numero: Inteiro que representa o número da casa
- cep: String que representa o CEP de um endereço

O método deve retornar uma única string com esses dados no seguinte formato: , - ,

Lembre-se de respeitar as vírgulas e os espaços!
*/

const rua = "Rua dos Alfeneiros";
const cidade = "Presidente Prudente";
const numero = 4;
const cep = "10000-100";


function montaEnderecoCompleto(rua, cidade, numero, cep) {
  return `${rua}, ${numero} - ${cidade}, ${cep}`;
}

console.log(montaEnderecoCompleto(rua, cidade, numero, cep));
console.log(' ');

/**
04) Refatore o código a seguir para utilizar template strings.

let nome = 'usuario';
console.log('Bem-vindo ' + usuário + '!');
*/

let nome = 'usuario';
console.log(`Bem-vindo, ${nome}!`);
console.log(' ');

/**
05) Faça a implementação da função 'soma' que recebe como parâmetro dois valores que devem ser somados. O resultado da soma deve ser exibido no console no seguinte formato:
+ =

Utilize template string para implementar este método.

- Exemplo: soma(1,2) → 1 + 2 = 3
*/

function soma(x, y) {
  return `${x} + ${y} = ${x + y}`;
}

console.log(soma(2, 2));