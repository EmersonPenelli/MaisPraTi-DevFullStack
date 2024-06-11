/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const prompt = require("prompt-sync")();

const FEMININO = "Feminino";
const MASCULINO = "Masculino";

function receberEntradaDecimal(mensagem) {
  let decimal;
  do {
    decimal = parseFloat(prompt(mensagem));
    if (isNaN(decimal) || decimal < 0) {
      console.log("Informe um número decimal positivo válido!");
    }
  } while (isNaN(decimal) || decimal < 0);
  return decimal;
}

function receberEntradaInteira(mensagem, limite) {
  let inteiro;
  do {
    inteiro = parseInt(prompt(mensagem));
    if (isNaN(inteiro) || inteiro < 0 || inteiro > limite) {
      console.log(
        `Informe um número inteiro positivo válido menor ou igual a ${limite}!`
      );
    }
  } while (isNaN(inteiro) || inteiro < 0 || inteiro > limite);
  return inteiro;
}

console.log("Por favor, informe sua altura em metros:");
const altura = receberEntradaDecimal("> ");

console.log("Por favor, informe seu sexo:");
console.log("1 - Feminino");
console.log("2 - Masculino");
const sexoNumero = receberEntradaInteira("> ", 2);

let pesoIdeal;
if (sexoNumero === 1) {
  pesoIdeal = 62.1 * altura - 44.7;
} else {
  pesoIdeal = 72.7 * altura - 58;
}

console.log(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`);
