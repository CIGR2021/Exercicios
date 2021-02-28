// Prática do Dia 4.1
// Declaração de Variáveis
// let num1 = 100;
// let num2 = 22;
// let num3 = 500;
// Requisito 1
// let somar = num1 + num2;
// let subtrair = num2 - num1;
// let multiplicar = num1 * num2;
// let dividir = num1 * num2;
// let modulo = ((num1 + num2) % 2) == 0;
// Requisito 2
// if (num1 > num2){
//   console.log(`O maior é ${num1}`);
// }else{
//   console.log(`O maior é ${num2}`);
// }
// Requisito 3
// if (num1 > num2 && num1 > num3){
//   console.log(`O maior é ${num1}`);
// }else if(num2 > num1 && num2 > num3){
//   console.log(`O maior é ${num2}`);
// }else{
//   console.log(`O maior é ${num3}`);
// }
// Requisito 4
// Declaração de Variáveis
// let calculaPositivoNegativo = 0;

// if (calculaPositivoNegativo < 0){
//   console.log(`${calculaPositivoNegativo} é negativo`);
// }else if (calculaPositivoNegativo > 0){
//   console.log(`${calculaPositivoNegativo} é positivo`);
// }else{
//   console.log(`O valor é Zero`);
// }
// Requisito 5
// let ladoA = 5;
// let ladoB = 4;
// let ladoC = 1;
// let soma = ladoA + ladoB > ladoC && ladoB + ladoC > ladoA;
// if (ladoA < 0 || ladoB < 0 || ladoC < 0){
//    console.log("Erro um dos lados não é positivo")
// }
// if (soma){
//   console.log("É um triângulo");
// }else{
//   console.log("Erro! Não é um triângulo");
// }
// Requisito 6

// Requisito 7
let percent = 90;
let nota = null;
if (percent > 100 && percent < 0){
  console.log("Erro: Nota inválida - valor esperado 'de 0 a 100'");
}else if (percent >= 90){
  nota = "A";
}else if (percent >= 80){
  nota = "B";
}else if (percent >= 70){
  nota = "C";
}else if (percent >= 60){
  nota = "D";
}else if (percent >= 50){
  nota = "E";
}else {
  nota = "F";
}

console.log(nota)