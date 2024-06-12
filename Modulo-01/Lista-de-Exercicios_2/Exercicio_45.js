/*
45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

function contarStrings(array) {
  let contador = {};
  for (let i = 0; i < array.length; i++) {
    let chave = array[i];
    if (contador[chave]) {
      contador[chave]++;
    } else {
      contador[chave] = 1;
    }
  }
  return contador;
}

const strings = ["maça", "banana", "maça", "bergamota", "banana"];
const contagem = contarStrings(strings);
console.log(contagem);
