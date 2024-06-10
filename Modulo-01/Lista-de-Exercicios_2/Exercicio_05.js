/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

const prompt = require("prompt-sync")();

function imprimirOpcoes(opcoes) {
  console.log("Selecione uma das opções abaixo, informe somente o número!");
  opcoes.forEach((opcao, index) => {
    console.log(`${index} - ${opcao}`);
  });
}

function receberEntradaInteira(mensagem, limite) {
  let inteiro;
  do {
    inteiro = parseInt(prompt(mensagem));
    if (isNaN(inteiro) || inteiro < 0 || inteiro > limite) {
      console.log(
        `Informe um número inteiro, positivo válido entre 0 e ${limite}!`
      );
    }
  } while (isNaN(inteiro) || inteiro < 0 || inteiro > limite);
  return inteiro;
}

function determinarVencedor(jogador1, jogador2) {
  if (jogador1 === jogador2) {
    return "Empate!";
  }

  const vitorias = {
    Pedra: "Tesoura",
    Papel: "Pedra",
    Tesoura: "Papel",
  };

  if (vitorias[opcoes[jogador1]] === opcoes[jogador2]) {
    return "O primeiro jogador venceu!";
  } else {
    return "O segundo jogador venceu!";
  }
}

const opcoes = ["Pedra", "Papel", "Tesoura"];

imprimirOpcoes(opcoes);
let primeiroJogador = receberEntradaInteira(
  "Palpite do primeiro jogador: ",
  opcoes.length - 1
);

imprimirOpcoes(opcoes);
let segundoJogador = receberEntradaInteira(
  "Palpite do segundo jogador: ",
  opcoes.length - 1
);

console.log(`Primeiro jogador escolheu: ${opcoes[primeiroJogador]}`);
console.log(`Segundo jogador escolheu: ${opcoes[segundoJogador]}`);

console.log(determinarVencedor(primeiroJogador, segundoJogador));
