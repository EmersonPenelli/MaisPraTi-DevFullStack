/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

const prompt = require("prompt-sync")();

function lerNomes(quantidade) {
  let nomes = [];
  for (let i = 0; i < quantidade; i++) {
    nomes.push(prompt(`Digite o nome ${i + 1}: `));
  }
  return nomes;
}

function mostrarNomesInverso(nomes) {
  for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
  }
}

let listaDeNomes = lerNomes(7);
mostrarNomesInverso(listaDeNomes);
