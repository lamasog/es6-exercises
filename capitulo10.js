/*
01) Utilize o que foi aprendido neste capítulo e refatore a função imprimeProduto para utilizar arrow functions. Não deixe de customizar o método para utilizar templates strings.

let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})

function imprimeProduto(nome, preco) {
    console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
}
*/

let carrinho = [
  { nome: 'abacaxi', preco: '2.00' },
  { nome: 'detergente', preco: '2.50' },
  { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach((produto) =>  {
  console.log(`Produto: ${produto.nome} | ${produto.preco}`);
})

console.log(' ');

// let imprimeProduto = (nome, preco) => 
//   console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);

/*
02) Refatore o código a seguir para utilizar arrow functions:

let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach(function(item) {
    console.log(item);
})
*/

let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach((item) => console.log(item));

console.log(' ');

/*
03) Toda função declarada no escopo global possui o objeto window como valor do this. Por que acontece isso?

R: Toda função também declarada no escopo global possui o objeto window como valor do this.
*/

/*
04) Utilize as arrow funcions para deixar o código a seguir ainda menor.

let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map(function(palavrao){ return palavrao.length });

console.log(tamanhos); // [ 22, 22, 44, 28 ]
*/

let palavroes = [
  "Inconstitucionalíssimo",
  "Otorrinolaringologista",
  "Pneumoultramicroscopicossilicovulcanoconiose",
  "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map((palavrao) => palavrao.length);
console.log(tamanhos); // [ 22, 22, 44, 28 ]
console.log(' ');

/*
05) O código a seguir utiliza um velho truque do JavaScript para conseguir utilizar o valor do this que referência o objeto dentro do loop. Utilize os seus conhecimentos de ES6 para refatorá-lo da melhor maneira.

var equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function() {
        var that = this;
        this.membros.forEach(function(membro) {
            console.log(membro + ' é da equipe ' + that.nome);
        })
    }
}

equipe.imprimeNomes();
*/

const equipe = {
  nome: 'Valentes da Glória',
  membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
  imprimeNomes: function() {
      this.membros.forEach((membro) => 
          console.log(`${membro} é da equipe ${this.nome}`)
      )
  }
}

equipe.imprimeNomes();