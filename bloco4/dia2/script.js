// Requisito 1 - Mostrar todas as posições do Array
// Requisito 2 - Somar todas as posições do Array
// Requisito 3 - Calcular a Média

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

console.log("-----------------------------!");

for(let index = 0; index < numbers.length; index += 1){
  console.log(`Posição: ${index} elemento: ${numbers[index]}`);
  soma += numbers[index];
}

media = soma/numbers.length;

console.log("-----------------------------!");
console.log(`A soma do array é: ${soma}!`);
console.log(`A média é: ${media}!`);

// Requisito 4 - Comparar se média é maior ou menor que 20
if(media < 20){
  console.log("É menor que 20!");
}else{
  console.log("É maior que 20!");
}
// Requisito 5 - Descubra qual o maior valor contido no array e imprima-o
// Requisito 7 - Descubra qual o menor valor contido no array e imprima-o
let maiorValor = numbers[0];
let menorValor = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
  if (numbers[index] > maiorValor){
    maiorValor = numbers[index];
  }
  if (numbers[index] < menorValor){
    menorValor = numbers[index];
  }
}

console.log(`O Maior número é: ${maiorValor}!`);
console.log(`O Menor número é: ${menorValor}!`);

// Requisito 6 - Quantos valores ímpares tem no array imprima o resultado, e a mensagem "Números ímpares não encontrados!" se não houver nenhum
let contador = 0;
for(let index6 = 0; index6 < numbers.length; index6 += 1){
  switch (numbers[index6] % 2 == 1){
    case true:
      contador += 1;
      break;
  }
}
if (contador == 0){
  console.log(`Números ímpares não encontrados!`);
}else{
  console.log(`Quantidade de números ímpares é: ${contador}`);
}
