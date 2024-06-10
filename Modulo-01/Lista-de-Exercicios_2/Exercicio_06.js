/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.
*/

const prompt = require("prompt-sync")();

function receberEntradaInteira(mensagem, limiteInferior, limiteSuperior) {
  let inteiro;
  do {
    inteiro = parseInt(prompt(mensagem));
    if (
      isNaN(inteiro) ||
      inteiro < limiteInferior ||
      inteiro > limiteSuperior
    ) {
      console.log(
        `Informe um número inteiro, válido entre ${limiteInferior} e ${limiteSuperior}!`
      );
    }
  } while (
    isNaN(inteiro) ||
    inteiro < limiteInferior ||
    inteiro > limiteSuperior
  );
  return inteiro;
}

const numeroSorteado = Math.floor(Math.random() * 5) + 1;

const chuteJogador = receberEntradaInteira(
  "Informe um inteiro entre 1 e 5 (inclusos): ",
  1,
  5
);

if (chuteJogador === numeroSorteado) {
  console.log(
    `Parabéns, você acertou! O número sorteado foi ${numeroSorteado}.`
  );
} else {
  console.log(`Você errou! O número sorteado foi ${numeroSorteado}.`);
}
