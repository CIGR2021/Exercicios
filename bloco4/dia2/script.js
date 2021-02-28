// Requisito 1 - Mostrar todas as posições do Array
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 
// for(let index = 0; index < numbers.length; index += 1){
  // console.log(`Posição: ${index} elemento: ${numbers[index]}`);
// }

// Requisito 2 - Somar todas as posições do Array
// Requisito 3 - Calcular a Média
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for(let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
}

media = soma/numbers.length;

console.log(`A soma do array é: ${soma}!`);
console.log(`A média é: ${media}!`);
