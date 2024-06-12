/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/

const prompt = require("prompt-sync")();

function receberEntradaInteira(mensagem, limite = Number.MAX_SAFE_INTEGER) {
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

function verificarAcertos(gabarito, respostas) {
  let acertos = 0;
  for (let i = 0; i < respostas.length; i++) {
    if (gabarito[i] === respostas[i]) {
      acertos++;
    }
  }
  return acertos;
}

function preencherRespostas(tamanho) {
  const vetor = [];
  while (vetor.length < tamanho) {
    let respostaAtual = receberEntradaInteira(`Resposta ${vetor.length + 1}: `);
    vetor.push(respostaAtual);
  }
  return vetor;
}

function fazerCartilha(mensagem, tamanho) {
  console.log(mensagem);
  return preencherRespostas(tamanho);
}

function verificarApostadores(numElementos, numApostadores) {
  const gabarito = fazerCartilha(
    "Informe o gabarito de respostas: ",
    numElementos
  );

  for (let i = 0; i < numApostadores; i++) {
    const numeroCartao = receberEntradaInteira(
      `Informe o número do cartão do apostador ${i + 1}: `
    );
    const respostas = fazerCartilha(
      `Informe as respostas do apostador ${i + 1}:`,
      numElementos
    );
    const acertos = verificarAcertos(gabarito, respostas);

    // Exibindo o número do apostador e o número de acertos
    console.log(`Apostador ${numeroCartao} teve ${acertos} acertos.`);
    if (acertos === numElementos) {
      console.log("Parabéns, tu foste o GANHADOR!");
    }
    console.log("\n");
  }
}

const TAMANHO = 13;
const NUMERODEAPOSTADORES = 100;

verificarApostadores(TAMANHO, NUMERODEAPOSTADORES);
