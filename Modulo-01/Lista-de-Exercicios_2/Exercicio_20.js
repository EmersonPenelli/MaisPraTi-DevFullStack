/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

const prompt = require("prompt-sync")();

const TAXA_INSS = 0.12;
const TOTAL_FUNCIONARIOS = 80;

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

let listaFuncionarios = [];

for (let i = 0; i < TOTAL_FUNCIONARIOS; i++) {
  let funcionario = {};
  funcionario.matricula = prompt("Informe a matrícula: ");
  funcionario.nome = prompt("Informe o nome: ");
  funcionario.salario = receberEntradaDecimal("Informe o salário: ");
  funcionario.inss = funcionario.salario * TAXA_INSS;
  funcionario.salarioLiquido = funcionario.salario - funcionario.inss;
  listaFuncionarios.push(funcionario);
}

for (const funcionario of listaFuncionarios) {
  console.log(`\nMatrícula: ${funcionario.matricula}`);
  console.log(`Nome: ${funcionario.nome}`);
  console.log(`Salário bruto: R$ ${funcionario.salario.toFixed(2)}`);
  console.log(`Dedução INSS: R$ ${funcionario.inss.toFixed(2)}`);
  console.log(`Salário líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}\n`);
}
