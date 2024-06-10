/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

const prompt = require("prompt-sync")();

function receberEntradaNumero(mensagem) {
  let numero;
  do {
    numero = parseFloat(prompt(mensagem));
    if (isNaN(numero) || numero < 0) {
      console.log("Informe um número válido e positivo!");
    }
  } while (isNaN(numero) || numero < 0);
  return numero;
}

const PRECO_POR_KM_CURTO = 0.5;
const PRECO_POR_KM_LONGO = 0.45;
const LIMITE_DISTANCIA = 200;

let distancia = receberEntradaNumero(
  "Informe a distância que você deseja percorrer em Km: "
);

let precoPassagem;
if (distancia <= LIMITE_DISTANCIA) {
  precoPassagem = (distancia * PRECO_POR_KM_CURTO).toFixed(2);
} else {
  precoPassagem = (distancia * PRECO_POR_KM_LONGO).toFixed(2);
}

console.log(
  `O preço da passagem para a distância de ${distancia} Km é R$ ${precoPassagem}`
);
