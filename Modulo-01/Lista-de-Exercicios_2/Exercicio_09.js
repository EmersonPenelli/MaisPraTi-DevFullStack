/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

const prompt = require("prompt-sync")();

function receberEntradaDecimal(mensagem) {
  let decimal;
  do {
    decimal = parseFloat(prompt(mensagem));
    if (isNaN(decimal) || decimal < 0) {
      console.log("Informe um número decimal, positivo válido!");
    }
  } while (isNaN(decimal) || decimal < 0);
  return decimal;
}

function receberEntradaInteira(mensagem, limite) {
  let inteiro;
  do {
    inteiro = parseInt(prompt(mensagem));
    if (
      isNaN(inteiro) ||
      inteiro < 0 ||
      (limite !== undefined && inteiro > limite)
    ) {
      console.log(
        `Informe um número inteiro, positivo válido${
          limite !== undefined ? " menor ou igual a " + limite : ""
        }!`
      );
    }
  } while (
    isNaN(inteiro) ||
    inteiro < 0 ||
    (limite !== undefined && inteiro > limite)
  );
  return inteiro;
}

const MASCULINO = "Masculino";
const FEMININO = "Feminino";
const SIM = "Sim";
const NAO = "Não";

let totalSalarioMasculino = 0;
let totalSalarioFeminino = 0;
let sexo;
let continuar;
do {
  console.log("Informe o sexo:");
  console.log("0- Masculino");
  console.log("1- Feminino");
  sexo = receberEntradaInteira("Entrada: ", 1);
  if (sexo === 0) {
    totalSalarioMasculino += receberEntradaDecimal("Informe o salário: ");
  } else {
    totalSalarioFeminino += receberEntradaDecimal("Informe o salário: ");
  }

  console.log("Deseja continuar?");
  console.log("0- Sim");
  console.log("1- Não");
  continuar = receberEntradaInteira("Entrada: ", 1);
} while (continuar === 0);

console.log(`O total do salário feminino é de R$ ${totalSalarioFeminino}`);
console.log(`O total do salário masculino é de R$ ${totalSalarioMasculino}`);
