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
  
*/
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
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

