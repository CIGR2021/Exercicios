/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
  Exemplo de palíndromo: arara .
  verificaPalindrome("arara") ;
  Retorno esperado: true
  verificaPalindrome("desenvolvimento") ;
  Retorno esperado: false
*/
function verificaPalindrome(word) {
  word = word.toLowerCase();
  for (let index = 0; index < word.length; index += 1) {
    if (word[index] !== word[word.length - 1 - index]) {
      return false;
    }
  }
  return true;
}//console.log(verificaPalindrome('arara'));

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
  Array de teste: [2, 3, 6, 7, 10, 1]; .
  Valor esperado no retorno da função: 4.
*/
function retornePosicaoMaiorNumero(numbers){
  let maiorValor = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
      maiorValor = numbers[index];
      indexMaiorValor = index;
    }
  }
  return indexMaiorValor;
}
console.log(retornePosicaoMaiorNumero([2, 3, 6, 7, 10, 1]))