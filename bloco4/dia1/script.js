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
// let percent = 90;
// let nota = null;
// if (percent > 100 && percent < 0){
  // console.log("Erro: Nota inválida - valor esperado 'de 0 a 100'");
// }else if (percent >= 90){
  // nota = "A";
// }else if (percent >= 80){
  // nota = "B";
// }else if (percent >= 70){
  // nota = "C";
// }else if (percent >= 60){
  // nota = "D";
// }else if (percent >= 50){
  // nota = "E";
// }else {
  // nota = "F";
// }
// 
// console.log(nota)

// Requisito 8
// let numberOne = 1;
// let numberTwo = 5;
// let numberTree = 3;
// let result = false;
// 
// if (numberOne % 2 == 0 || numberTwo % 2 == 0 || numberTree % 2 == 0){
  // result = true;
// }
// console.log(result)

// Requisito 9
// let numberOne = 2;
// let numberTwo = 4;
// let numberTree = 6;
// let result = false;
// 
// if (numberOne % 2 == 1 || numberTwo % 2 == 1 || numberTree % 2 == 1){
  // result = true;
// }
// console.log(result)
// 
// Requisito 10
// let custoDoProduto = 200;
// let quantidadeProduto = 1000;
// let valorDeVenda = 300;
// let imposto = custoDoProduto * 0.2;
// let custoDoProdutoFinal = custoDoProduto + imposto;
// let lucro1000 = (valorDeVenda - custoDoProdutoFinal) * quantidadeProduto;
// 
// console.log(lucro1000)

// Requisito 11
let salarioBruto = 6000;
let salarioLiquido = null;
let salarioTetoRegra = [1556.95, 2594.93, 5189.82]

// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
let innssRegra = [0.08, 0.09, 0.11, 570.88]

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
let impostoRegraUm = 142.80 - ((salarioBruto - (salarioBruto * innssRegra[1])) * 0.075) - (salarioBruto - (salarioBruto * innssRegra[1]));

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
let impostoRegraDoisMaisIR = (salarioBruto - (salarioBruto * innssRegra[2])) * 0.15 - 354.80
let impostoRegraDois = (salarioBruto - (salarioBruto * innssRegra[2])) - impostoRegraDoisMaisIR;

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
let impostoRegraTresMaisIR = (salarioBruto - (salarioBruto * innssRegra[2])) * 0.225 - 636.13
let impostoRegraTres = (salarioBruto - (salarioBruto * innssRegra[2])) - impostoRegraTresMaisIR;

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
let impostoRegraQuatroMaisIR = (salarioBruto - (salarioBruto * innssRegra[2])) * 0.275 - 869.36
let impostoRegraQuatro = (salarioBruto - (salarioBruto * innssRegra[2])) - impostoRegraQuatroMaisIR;

// Regra INSS Acima de R$ 5.189,82: alíquota de 570,88
let impostoRegraCincoMaisIR = (salarioBruto - innssRegra[3]) * 0.275 - 869.36
let impostoRegraCinco = salarioBruto - innssRegra[3] - impostoRegraCincoMaisIR;

if (salarioBruto < salarioTetoRegra[0]){ // Menor que 1.556,95
  salarioLiquido = salarioBruto - (salarioBruto * innssRegra[0]).toFixed(2);
}
// Regra Um - 1.903,99 a 2.826,65
else if (salarioBruto < salarioTetoRegra[1]){ // Menor que 2.594,93
  if(salarioBruto >= 1903.99){
    salarioLiquido = impostoRegraUm * (-1).toFixed(2);
  }else{
    salarioLiquido = salarioBruto - (salarioBruto * innssRegra[1]).toFixed(2);
  }
}
// Regra Um - de R$ 1.903,99 a 2.826,65
// Regra Dois - de R$ 2.826,66 a R$ 3.751,05
// Regra Três - de R$ 3.751,06 a R$ 4.664,68
// Regra Quatro - Acima de R$ 4.664,68
else if (salarioBruto <= salarioTetoRegra[2]){ // Menor ou igual a 5.189,82
  if(salarioBruto > 2826.65 && salarioBruto < 3751.06){
    salarioLiquido =  impostoRegraDois.toFixed(2);
  }else if(salarioBruto > 3751.05 && salarioBruto < 4664.69){
    salarioLiquido = impostoRegraTres.toFixed(2);
  }else if(salarioBruto > 4664.68 && salarioBruto < 5189.82){
    salarioLiquido = impostoRegraQuatro.toFixed(2);
  }else{
    salarioLiquido = impostoRegraUm.toFixed(2)
  }
}else if(salarioBruto > 5189.82){
  salarioLiquido = impostoRegraCinco;
}
console.log(salarioLiquido);