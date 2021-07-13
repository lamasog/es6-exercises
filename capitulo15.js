/*
01) De forma resumida, defina o que é o desestruturamento.

R: Uma maneira de extrair valores armazenados em objetos e Arrays.
*/

/*
02) Refatore o trecho de código a seguir para utilizar a técnica de desestruturamento.

const email = usuario.email;
const nome = usuario.nome;
const idade = usuario.idade
*/

const {email, nome, idade} = usuario;

/*
03) Considere o objeto literal usuario e extraia as propriedades nome e email em variáveis com o nome nick e login, respectivamente.

const usuario = {
  nome: 'Toreto',
  email: 'velozesefuriososparasempre@gmail.com'
}
*/

const {nome:nick, login:email} = usuario;

/*
04) Considere a lista de contatos a seguir:

const contatos = [
  {
    nome: 'Mario Antonio',
    numero: '1234-5678'
  },
  {
    nome: 'Reinalda Silva',
    numero: '1234-6789'
  },
  {
    nome: 'Bárbara Lopes',
    numero: '1234-5567'
  }
];
Utilizando a técnica de desestruturamento de arrays, obtenha somente os dados do segundo contato.
*/

const [,contato] = contatos;

/*
05) Otimize o trecho de código a seguir utilizando o desestruturamento.

const profissional = {
  titulo: 'Engenheiro de Software',
  departamento: 'Engenharia'
};

function isEngenheiro(profissional) {
  const titulo = profissional.titulo;
  const departamento = profissional.departamento;

  return titulo.indexOf("Engenheiro") > -1 && departamento === 'Engenharia';
}

isEngenheiro(profissional); // true
profissional.titulo = 'Marketing';
isEngenheiro(profissional); // false
*/

const profissional = {
  titulo: 'Engenheiro de Software',
  departamento: 'Engenharia'
};

function isEngenheiro({titulo, departamento}) {
  return titulo.indexOf("Engenheiro") > -1 && departamento === 'Engenharia';
}

isEngenheiro(profissional); // true
profissional.titulo = 'Marketing';
isEngenheiro(profissional); // false

/*
06) O seu sistema escolar contém uma série de informações armazenadas em arrays no seguinte formato:

const corpoDocente = [
  [ 'Gramática', '9:00', 'Sueli' ],
  [ 'Matemática', '10:15', 'Amilton'],
  [ 'Educação Física', '11:30', 'Bruno' ]
];

Para o usuário final, é necessário que a informação seja apresentada de uma forma mais adequada, identificando o que significa cada um dos itens. Implemente o método mostraGradeProfessores() quer recebe um array de arrays no formato do objeto corpoDocente e devolve, para cada item, a seguinte mensagem no console:

"Aula de <matéria> às <hora> com professor(a) <nome>"
*/

const corpoDocente = [
  [ 'Gramática', '9:00', 'Sueli' ],
  [ 'Matemática', '10:15', 'Amilton'],
  [ 'Educação Física', '11:30', 'Bruno' ]
];

function mostraGradeProfessores(corpoDocente) {
  return corpoDocente.forEach(([materia, hora, nome]) => {
    console.log(`Aula de ${materia} às ${hora} com professor(a) ${nome}`);
  });
}

/*
x) Converta do modelo 1 para o modelo 2 utilizando desestruturamento de objetos e arrays.

// modelo1
const pontos = [
  [1,2],
  [3,4],
  [5,6]
];

// modelo 2
const pontos = [
  {x:1, y:2},
  {x:3, y:4},
  {x:5, y:6},
]
*/

let pontos = [
  [1,2],
  [3,4],
  [5,6]
];

function convertToModel2(pontos) {
  const novosPontos = pontos.map(([x, y]) => {
    return {x, y};
  })
  return pontos = novosPontos;
}

console.log(convertToModel2(pontos));


