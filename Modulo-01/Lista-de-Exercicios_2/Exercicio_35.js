/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/

const prompt = require("prompt-sync")();

function numeroAleatorio() {
  return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
}

function receberEntradaInteira(mensagem, limite) {
  if (limite === undefined) {
    limite = Number.MAX_SAFE_INTEGER;
  }
  let inteiro;
  while (true) {
    try {
      inteiro = parseInt(prompt(mensagem));
      if (!isNaN(inteiro) && inteiro >= 0 && inteiro <= limite) {
        break;
      }
    } catch (error) {
      // Continue loop
    }
    console.log("Informe um número inteiro positivo válido!");
  }
  return inteiro;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

function separarValores(tamanho) {
  const vetorPares = [];
  const vetorImpares = [];
  let contPares = 0;
  let contImpares = 0;

  for (let i = 0; i < tamanho; i++) {
    const valor = receberEntradaInteira("Informe um inteiro válido: ");

    if (ehPar(valor)) {
      vetorPares.push(valor);
      contPares++;
      if (contPares === 5) {
        console.log("Vetor de pares está cheio:");
        console.log(vetorPares);
        vetorPares.length = 0; // Limpa o vetor
        contPares = 0;
      }
    } else {
      vetorImpares.push(valor);
      contImpares++;
      if (contImpares === 5) {
        console.log("Vetor de ímpares está cheio:");
        console.log(vetorImpares);
        vetorImpares.length = 0; // Limpa o vetor
        contImpares = 0;
      }
    }
  }

  // Imprime o conteúdo restante dos vetores, se houver
  if (contPares > 0) {
    console.log("Vetor de pares restante:");
    console.log(vetorPares);
  }
  if (contImpares > 0) {
    console.log("Vetor de ímpares restante:");
    console.log(vetorImpares);
  }
}

const TAMANHO = 30;

separarValores(TAMANHO);
