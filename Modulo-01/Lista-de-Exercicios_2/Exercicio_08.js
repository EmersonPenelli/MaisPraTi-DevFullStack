/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

const prompt = require("prompt-sync")();

function receberEntradaInteira(mensagem) {
  let inteiro;
  do {
    inteiro = parseInt(prompt(mensagem));
    if (isNaN(inteiro) || inteiro < 0) {
      console.log("Informe um número inteiro, positivo válido!");
    }
  } while (isNaN(inteiro) || inteiro < 0);
  return inteiro;
}

function calcularPontos(horasAtividade) {
  const PONTOSPORHORA10 = 2;
  const PONTOSPORHORA20 = 5;
  const PONTOSPORHORA20PLUS = 10;

  if (horasAtividade <= 10) {
    return horasAtividade * PONTOSPORHORA10;
  } else if (horasAtividade <= 20) {
    return horasAtividade * PONTOSPORHORA20;
  } else {
    return horasAtividade * PONTOSPORHORA20PLUS;
  }
}

function calcularValor(pontos) {
  const DINHEIROPORPONTOS = 0.05;
  return pontos * DINHEIROPORPONTOS;
}

let horasAtividade = receberEntradaInteira(
  "Diga quantas horas de atividade física você realizou no mês: "
);

let pontos = calcularPontos(horasAtividade);
let valorAReceber = calcularValor(pontos);

console.log(
  `Você fez ${pontos} pontos e recebeu R$ ${valorAReceber.toFixed(2)}!`
);
