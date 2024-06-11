/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

const prompt = require("prompt-sync")();

let listaNome = [];
let listaIdade = [];
for (let index = 0; index < 9; index++) {
  listaNome[index] = prompt("Informe o nome: ");
  listaIdade[index] = prompt("Informe a idade: ");
}
let contador = 0;
for (let index = 0; index < 9; index++) {
  if (listaIdade[index] < 18) {
    if (contador == 0) {
      console.log("\n\nDados das pessoas menores de idade:\n");
      contador++;
    }
    console.log(`Idade: ${listaIdade[index]}; Nome: ${listaNome[index]};`);
  }
}
