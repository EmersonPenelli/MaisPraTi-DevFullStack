/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

let vetor = new Array(15);
vetor[0] = 1;
vetor[1] = 1;

for (let index = 2; index < 15; index++) {
  vetor[index] = vetor[index - 1] + vetor[index - 2];
}

console.log(vetor);
