/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

const prompt = require("prompt-sync")();

function receberEntradaInteira(mensagem) {
  let inteiro = "a";
  do {
    try {
      inteiro = parseInt(prompt(mensagem));
    } catch (error) {
      console.log(
        "Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)"
      );
      inteiro = "a";
    }
    if (inteiro < 0) {
      console.log(
        "Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)"
      );
      inteiro = "a";
    } else if (isNaN(inteiro)) {
      inteiro = "a";
      console.log("Informe um número inteiro, positivo válido!");
    }
  } while (inteiro == "a");
  return inteiro;
}

const MINUTOS_PERDIDOS_POR_CIGARRO = 10;
const MINUTOS_NO_DIA = 24 * 60;
const MINUTOS_POR_HORA = 60;

let cigarrosPorDia = receberEntradaInteira(
  "Quantos cigarros você fuma por dia?"
);
let anosFumando = receberEntradaInteira("Quantos anos você fuma?");

let totalCigarros = cigarrosPorDia * anosFumando * 365;
let minutosPerdidos = totalCigarros * MINUTOS_PERDIDOS_POR_CIGARRO;

let diasPerdidos = Math.floor(minutosPerdidos / MINUTOS_NO_DIA);
let minutosRestantes = minutosPerdidos % MINUTOS_NO_DIA;
let horasPerdidas = Math.floor(minutosRestantes / MINUTOS_POR_HORA);
let minutosFinais = minutosRestantes % MINUTOS_POR_HORA;

if (diasPerdidos > 0 || horasPerdidas > 0 || minutosFinais > 0) {
  console.log(
    `Você perdeu ${diasPerdidos} dias, ${horasPerdidas} horas e ${minutosFinais} minutos de vida!`
  );
} else {
  console.log(`Nenhum tempo de vida foi perdido, você não fumou!`);
}
