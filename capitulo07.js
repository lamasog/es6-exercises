/*
01) Implemente o método 'removeDuplicatas' quer recebe o seguinte parâmetro:

- numeros: lista de números inteiros positivos

O método deve retornar a lista de número sem repetições. Utilize a estrutura de dados Set para resolver este problema.

- Exemplo: removeDuplicatas([1,1,2,2,3,3]) → [1,2,3]
*/

const list = [1, 1, 2, 2, 3, 3];

function removeDuplicatas(list) {
    let removed = new Set(list);
    return removed;
}

console.log(removeDuplicatas(list));
console.log(' ');

/**
 02) Qual é a principal diferença entre a estruturas de dados Set e WeakSet?

 R: O WeakSet é um Set que não previne os seus elementos de
serem coletados pelo Garbage Collector. Também só é possível adicionar objetos; ele não é iterável; e não há como remover todos os elementos de uma vez usando clean().
 */

/*
Um aluno do curso de computação está tentando executar o código a seguir:

var musica1 = {
  titulo: 'O amor não tem rollback',
  autor: 'SQL'
}

var musica2 = {
  titulo: 'Nada se componentiza a você',
  autor: 'React'
}

var musicas = new WeakSet([musica1, musica2]);
for(var musica of musicas){
  console.log(musica);
}

Mas sempre que ele tenta executar este código, ele dá erro. Você sabe dizer qual é o problema?

R: A estrutura WeakSet não é iterável.
*/

/**
Cite um caso onde podemos utilizar a estrutura de WeakMap.

R: Garantir que certo método ou propriedade pertence a um objeto
específico e não a todas as instâncias do mesmo tipo.
 */