/*
Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/

const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "));

const mediaSemestral = (nota1 + nota2) / 2;

if (mediaSemestral >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Infelizmente, você não foi aprovado.");
}

console.log("Sua média semestral é: " + mediaSemestral.toFixed(1));
