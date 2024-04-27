/*
Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/

const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "));

const mediaSemestral = (nota1 + nota2) / 2;

if (mediaSemestral >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Você foi REPROVADO! Estude mais.");
}

console.log("Sua média semestral é: " + mediaSemestral.toFixed(1));
