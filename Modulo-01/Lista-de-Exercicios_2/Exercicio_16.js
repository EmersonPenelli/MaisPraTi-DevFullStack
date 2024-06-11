/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

function gerarNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

function preencherVetor(tamanho, maxValor) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(gerarNumeroAleatorio(maxValor));
  }
  return vetor;
}

const TAMANHO_VETOR = 20;
const MAX_VALOR = 100;

let lista = preencherVetor(TAMANHO_VETOR, MAX_VALOR);

console.log(`Lista original: ${lista}`);

let listaEmOrdem = [...lista].sort((a, b) => a - b); // Usar [...lista] para evitar mutação do array original
console.log(`Lista ordenada: ${listaEmOrdem}`);
