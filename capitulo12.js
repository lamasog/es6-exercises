/*
01) O que acontece na execução do código a seguir?

function mostraNome(nome) {
    console.log(`Meu nome é: ${nome}`);
}

mostraNome(); // ??

R: Meu noem é: undefined
*/

/*
02) Refatore o código a seguir utilizando parâmetros padrão de função.

function soma(a,b) {
  if(a === undefined) {
    a = 0;
  }
  if(b === undefined) {
    b = 0;
  }

  return a + b;
}
*/

function soma(a = 0, b = a) {
  return a + b;
}

console.log(soma(2, 3));

/*
03) Refatore o código a seguir de modo a remover as variáveis sobrenomeTratado e nomeDoMeioTratado.

function imprimeNomeCompleto(nomeTratado, sobrenome, nomeDoMeio) {
  let nomeTratado = nomeTratado || '';
  let sobrenomeTratado = sobrenome || '';
  let nomeDoMeioTratado = nomeDoMeio || '';

  console.log(`${nomeTratado} ${nomeDoMeioTratado} ${sobrenomeTratado}`);
}

imprimeNomeCompleto('João'); // João
*/

function imprimeNomeCompleto(nome, sobrenome = '', nomeDoMeio = '') {
  let nomeTratado = nome || '';
  console.log(`${nomeTratado} ${nomeDoMeio} ${sobrenome}`);
}

imprimeNomeCompleto('João');

/*
04) Considere o código a seguir e responda: Qual o valor será mostrado? E por que?

const v = 'valor 1';
function funcao(x = v) {
  const v = 'valor 2';
  console.log(x);
}

funcao(); // qual valor será mostrado?

R: valor 2 --> Por causa do escopo de v.
*/

/*
05) Como podemos tornar o código abaixo menos repetitivo?

function subtrair(a = 0,b = 0) {
  return a + b;
}
*/

function subtrair(a = 0,b = a) {
  return a - b;
}

console.log(subtrair(3, 1));
