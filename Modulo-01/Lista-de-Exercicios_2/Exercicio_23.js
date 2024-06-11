/*
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

function criarMatrizIdentidade(tamanho) {
  const matriz = [];
  for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
      matriz[i][j] = i === j ? 1 : 0;
    }
  }
  return matriz;
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

const TAMANHO = 7;
const MATRIZIDENTIDADE = criarMatrizIdentidade(TAMANHO);

imprimirMatriz(MATRIZIDENTIDADE);
