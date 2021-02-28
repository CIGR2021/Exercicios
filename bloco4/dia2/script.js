// Requisito 1 - Mostrar todas as posições do Array
// Requisito 2 - Somar todas as posições do Array
// Requisito 3 - Calcular a Média
// Requisito 4 - Comparar se média é maior ou menor que 20

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

if(media < 20){
  console.log("É menor que 20!");
}else{
  console.log("É maior que 20!");
}
