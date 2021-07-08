/*
01) Crie um método chamado possuiProduto que recebe dois parâmetros:

- produtos: Mapa com nome e preço dos produtos (ex: 'Feijão: 2.30')
- produtoDesejado: String que representa o nome do produto desejado

Faça com o método retorne true caso o produto esteja contido no mapa, caso contrário, devolva false.
*/

const produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

function possuiProduto(produtos, produtoDesejado) {
  return produtos.has(produtoDesejado);
}

console.log(possuiProduto(produtos, 'Arroz'));
console.log(' ');

/*
02) Implemente o método 'calculaValorTotalDaCompra' que recebe quatro parâmetros:

- produtos: Lista com o nome dos produtos comprados
- cidade: String que representa o nome da cidade
- caixa: Mapa que contém relação de produtos e preços
- fretes: Mapa que contém relação de cidades e fretes

Calcule o preço total da compra junto com o frete de acordo com as tabelas a seguir:

Produto         Preço
Arroz           7.10
Feijão          2.30
Macarrão        4.70
Refrigerante    3.00

Cidade          Frete
São Paulo       10.10
Rio de Janeiro  12.30
Brasília        14.70
Outros          13.00

Exemplo: calculaValorTotalDaCompra(['Arroz'], 'São Paulo', caixa, fretes) → 7.20
*/

const caixa = new Map();
caixa.set('Arroz', 7.10);
caixa.set('Feijão', 2.30);
caixa.set('Macarrão', 4.70);
caixa.set('Refrigerante', 3.00);

const fretes = new Map();
fretes.set('São Paulo', 10.10);
fretes.set('Rio de Janeiro', 12.30);
fretes.set('Brasília', 14.70);
fretes.set('Outros', 13.00);

function calculaValorTotalDaCompra(produtos, cidade, caixa, frete){
  let soma = 0;

  for(let produto of produtos)
    soma += caixa.get(produto);

  if(fretes.has(cidade))
    soma += fretes.get(cidade);

  return soma;
}

console.log(calculaValorTotalDaCompra(['Arroz', 'Feijão'], 'São Paulo', caixa, fretes));
console.log(' ');

/**
 03) Em que situações devemos usar uma implementação de Map ao invés de uma implementação de objeto literal?

 R: 
 - As chaves são desconhecidas até o tempo de execução, ou
você precisa procurá-las dinamicamente?
- Todos os valores sempre serão do mesmo tipo, e podem ser
usados de forma intercambiável?
- Você precisa de chaves que não são Strings?
- Os pares chave/valor são adicionados ou removidos
frequentemente?
- Você tem uma quantidade de pares chave/valor arbitrária
(de troca fácil)?
- A coleção é iterada?

Se as respostas para as perguntas forem positivas, são sinais de
que você provavelmente quer usar uma instância de Map. 
 */

/*
04) Crie um exemplo de uso para a estrutura de WeakMap.
R: Armazenar dados privados dentro de uma classe.
*/

/*
05) Implemente o método deletaAmigos que recebe dois parâmetros:

- amigos: Mapa com relação de nome e informações sobre os amigos
- exAmigos: Lista com nome dos amigos que deve ser deletado

Para cada nome em exAmigos, você deve:

- Verificar se nome consta na lista. Se sim, deletá-lo e imprimir no console: " foi deletado!"
- Se o nome não estiver no mapa de amigos, exibir no console para o usuário: " não é seu amigo!"

Considere os seguintes amigos para este exercícios:

Nome            Dados
João Silva      idade: 23, gênero: masculino
Luisa Pimenta   idade: 18, gênero: feminino
Julio Marinho   idade: 52, gênero: masculino
Marcela Mel     idade: 27, gênero: feminino
*/

const amigo = new Map();
amigo.set("João Silva", { idade: 23, sexo: 'masculino' });
amigo.set("Luisa Pimenta", { idade: 18, sexo: 'feminino' });
amigo.set("Julio Marinho", { idade: 52, sexo: 'masculino' });
amigo.set("Marcela Mel", { idade: 27, sexo: 'feminino' });

function deletaAmigos(amigos, exAmigos) {
  for(let exAmigo of exAmigos) {
    if(amigos.has(exAmigo)) {
      amigos.delete(exAmigo);
      console.log(`${exAmigo} foi deletado(a)!`);
    }
    else console.log(`${exAmigo} não é seu amigo(a)!`);
  }
}

deletaAmigos(amigo, ['Luisa Pimenta', 'Henrique Costa', 'Julio Marinho']);



