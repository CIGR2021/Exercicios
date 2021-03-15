/*
  1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
  Valor esperado no console: Bem-vinda, Margarida.
  
  2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, 
  imprima o objeto no console.
  Valor esperado no console:
    {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim'
    };
  3 - Faça um for/in que mostre todas as chaves do objeto.
  Valor esperado no console:

    personagem
    origem
    nota
    recorrente
  4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
  Valor esperado no console:
  
    Margarida
    Pato Donald
    Namorada do personagem principal nos quadrinhos do Pato Donald
    Sim
  5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes 
  valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", 
  "Sim".
  Valor esperado no console:

  Margarida e Tio Patinhas
  Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
  Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
  Ambos recorrentes // Atenção para essa última linha!
*/
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald"
};

console.log(`Bem-vinda, ${info.personagem}!`);

console.log("-------------------------");

info.recorrente = "Sim";
console.log(info);

console.log("-------------------------");

for (let key in info){
  console.log(key)
}

console.log("-------------------------");

for (let key in info){
  console.log(info[key]);
}

console.log("-------------------------");

let info2 = {};

info2 = atualizarInfo(info);

function atualizarInfo(info){
  let chaves = info;
  chaves.personagem += " e Tio Patinhas";
  chaves.origem += " e Christmas on Bear Mountain, Dell's Four Color Comics #178";
  chaves.nota += " e O último MacPatinhas";
  chaves.recorrente = "Ambos recorrentes // Atenção para essa última linha!";
  return chaves;
}
console.log(info2);