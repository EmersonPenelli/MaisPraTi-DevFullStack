/*
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

const prompt = require("prompt-sync")();

function receberEntradaInteira(mensagem, limite = Number.MAX_SAFE_INTEGER) {
  let inteiro;
  while (true) {
    inteiro = parseInt(prompt(mensagem));
    if (!isNaN(inteiro) && inteiro > 0 && inteiro <= limite) {
      break;
    }
    console.log(`Informe um número inteiro válido entre 1 e ${limite}!`);
  }
  return inteiro;
}

function receberEntradaDecimal(mensagem) {
  let decimal;
  while (true) {
    decimal = parseFloat(prompt(mensagem));
    if (!isNaN(decimal)) {
      break;
    }
    console.log("Informe um número decimal válido!");
  }
  return decimal;
}

function calcularSoma(vetor) {
  return vetor.reduce((acc, val) => acc + val, 0);
}

function calcularProduto(vetor) {
  return vetor.reduce((acc, val) => acc * val, 1);
}

function calcularMedia(vetor) {
  return calcularSoma(vetor) / vetor.length;
}

function ordenarCrescente(vetor) {
  return vetor.slice().sort((a, b) => a - b); // slice() para evitar a mutação do array original
}

function imprimirVetor(vetor) {
  console.log("Vetor:", vetor);
}

function imprimirOpcoes(mensagem, opcoes) {
  console.log(mensagem);
  opcoes.forEach((opcao, index) => {
    console.log(`${index + 1} - ${opcao}`);
  });
}

function preencherVetor(tamanho) {
  const vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(receberEntradaDecimal(`Informe o valor para a posição ${i}: `));
  }
  return vetor;
}

const opcoes = [
  "Soma dos elementos",
  "Produto dos elementos",
  "Média dos elementos",
  "Ordenar os elementos em ordem crescente",
  "Imprimir vetor",
];

const vetor = preencherVetor(6);

imprimirOpcoes("Informe o número da operação desejada (1 a 5): ", opcoes);

const operacao = receberEntradaInteira("Entrada: ", 5);

switch (operacao) {
  case 1:
    console.log("Soma dos elementos:", calcularSoma(vetor));
    break;
  case 2:
    console.log("Produto dos elementos:", calcularProduto(vetor));
    break;
  case 3:
    console.log("Média dos elementos:", calcularMedia(vetor));
    break;
  case 4:
    console.log("Elementos ordenados em ordem crescente:");
    imprimirVetor(ordenarCrescente(vetor));
    break;
  case 5:
    imprimirVetor(vetor);
    break;
  default:
    console.log("Operação inválida.");
}
