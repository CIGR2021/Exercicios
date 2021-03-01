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
// let n = 5;
// if (n <= 1){
  // console.log("Valor da variável 'n' tem que ser maior que 1");
// }else{
  // let linha = "";
  // for (let index = 0; index < n; index += 1){
    // for (let index = 4; index < n; index += 1){  
      // linha += "*";
    // }
    // console.log(linha);
  // }
// }

/* 3 - Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente 
asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/

// let n = 5;
// if (n <= 1){
  // console.log("Valor da variável 'n' tem que ser maior que 1");
// }else{
  // let espaco = "";
    // for (let index = 1; index < n+1; index += 1){
      // espaco += " ";
    // }
    // console.log(espaco + "*");
    // espaco = "";
    // for (let index = 2; index < n+1; index += 1){
      // espaco += " ";
    // }
    // console.log(espaco + "**");
    // espaco = "";
    // for (let index = 3; index < n+1; index += 1){
      // espaco += " ";
    // }
    // console.log(espaco + "***");
    // espaco = "";
    // for (let index = 4; index < n+1; index += 1){
      // espaco += " ";
    // }
    // console.log(espaco + "****");
    // espaco = "";
    // for (let index = 5; index < n+1; index += 1){
      // espaco += " ";
    // }
    // console.log(espaco + "*****");
// }

/* 4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****

*/
let n = 5;
if (n <= 1){
  console.log("Valor da variável 'n' tem que ser maior que 1");
}else{
  let espaco = "";
    for (let index = 3; index < n+1; index += 1){
      espaco += " ";
    }
    console.log(espaco + "*" + espaco);
    espaco = "";
    for (let index = 4; index < n+1; index += 1){
      espaco += " ";
    }
    console.log(espaco + "***" + espaco);
    espaco = "";
    for (let index = 5; index < n+1; index += 1){
      espaco += " ";
    }
    console.log(espaco + "*****");
}