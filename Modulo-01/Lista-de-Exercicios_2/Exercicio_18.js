/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

const prompt = require("prompt-sync")();

function receberEntradaDecimal(mensagem) {
  let decimal;
  do {
    decimal = parseFloat(prompt(mensagem));
    if (isNaN(decimal) || decimal < 0) {
      console.log("Informe um número decimal, positivo válido!");
      decimal = undefined;
    }
  } while (decimal === undefined);
  return decimal;
}

let funcionario = {
  nome: prompt("Informe o seu nome: "),
  cargo: prompt("Informe o seu cargo: "),
  salario: receberEntradaDecimal("Informe seu salário: "),
};

console.log("\n\nInformações do funcionário:");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
