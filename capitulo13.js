/*
01) Refatore o código a seguir para utilizar o operador Rest:

function calculaPrecoTotal(a, b, c, d, e) {
  let precos = [a,b,c,d,e];
  return precos.reduce(function(total, preco) {
    return total + preco;
  }, 0)
}

calculaPrecoTotal(1,2,3,4,5); // 15
*/

function calculaPrecoTotal(...precos) {
  return precos.reduce((total, preco) => total + preco, 0)
}

console.log(calculaPrecoTotal(1,2,3,4,5));
console.log(' ');

/*
02) Utilize o operador Rest para criar uma função que recebe um parâmetro referência, que é obrigatório, e mais n parâmetros numéricos. O objetivo é que esta função calcule se todos os valores numéricos passados são maiores que a referência e retorne verdadeiro ou falso.

Exemplo: todosSaoMaioresQue(2,3,4,5,6,7); // resultado esperado: true

Outros exemplos de entradas: todosSaoMaioresQue(5,4,3,2,1); // resultado esperado: false 
todosSaoMaioresQue(1,2); // resultado esperado: true
*/

function todosSaoMaioresQue(ref, ...valores) {
  let maiores = valores.reduce((maior, valor) => {
    if(valor > ref) return maior + 1;
    return maior;
  }, 0);

  if(maiores === valores.length) return true;
  return false;
}

console.log(todosSaoMaioresQue(1, 1, 3));
console.log(' ');

/*
03) Refatore o código abaixo para utilizar o operador Rest ao invés do arguments

function anunciaBolasSorteadas() {
  var nBolas = arguments.length;
  for(var i = 0; i < nBolas; i++) {
    console.log('A bola escolhida foi: ' + arguments[i]);
  }
}

anunciaBolasSorteadas(1,2,3);
// saída
// A bola escolhida foi: 1
// A bola escolhida foi: 2
// A bola escolhida foi: 3
*/

function anunciaBolasSorteadas(...bolas) {
  for(var i = 0; i < bolas.length; i++) {
    console.log(`A bola escolhida foi ${bolas[i]}`);
  }
}

anunciaBolasSorteadas(1,2,3);

/*
04) Um aluno de computação tentou utilizar o operador Rest para tratar números e letras, de quantidade indefinida, dentro do seu código, mas não conseguiu. Este foi o código que ele escreveu:

function numerosELetras(...numeros, ...letras){
  // corpo da função
}

Explique o porque este código não funciona.

R: Uma função só aceita um operador Rest.
*/

/*
05) O que é o objeto arguments?

R: Retorna um objeto com uma referência para cada argumento passado para o contexto de execução de uma função.
*/
