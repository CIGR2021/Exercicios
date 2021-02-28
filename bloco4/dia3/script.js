/* 1 - Para o primeiro exercício de hoje, faça um programa que:
dado um valor n qualquer,
seja n > 1,
imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

n = 5

*****
*****
*****
*****
*****

*/
// let n = 5;
// if (n <= 1){
  // console.log("Valor da variável 'n' tem que ser maior que 1");
// }else{
  // for (let index = 0; index < n; index += 1){
    // let linha = "";
    // for (let index = 0; index < n; index += 1){  
      // linha += "*";
    // }
    // console.log(linha);
  // }
// }

/* 2 - Para o segundo exercício, faça o mesmo que antes,
mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****

*/
let n = 5;
if (n <= 1){
  console.log("Valor da variável 'n' tem que ser maior que 1");
}else{
  let linha = "";
  for (let index = 0; index < n; index += 1){
    for (let index = 4; index < n; index += 1){  
      linha += "*";
    }
    console.log(linha);
  }
}