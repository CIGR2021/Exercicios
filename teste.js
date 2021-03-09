let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
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

// Requisito 8 - Crie um array que vá do 1 ao 25 é imprima-o.
// Requisito 9 - Divisão de todos os elementos do array por 2
let numeros = [];
for (let index = 1; index <= 25; index += 1){
  numeros.push(index);
}
console.log(`Array de número do 1 ao 25 - [${numeros}]`);
let divisaoPorDois = [];
for (let index = 1; index <= 25; index += 1){
  divisaoPorDois.push(index/2);
}
console.log(`Dividido por dois: [${divisaoPorDois}]`);