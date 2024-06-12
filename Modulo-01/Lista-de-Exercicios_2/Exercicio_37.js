/*
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

const prompt = require("prompt-sync")();

function verificarAcertos(gabarito, respostas) {
  let acertos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] === respostas[i]) {
      acertos++;
    }
  }
  return acertos;
}

function fazerCartilha(mensagem, tamanho) {
  console.log(mensagem);
  const respostas = [];
  for (let i = 0; i < tamanho; i++) {
    respostas.push(prompt(`Resposta ${i + 1}: `));
  }
  return respostas;
}

function verificarAlunos(numElementos, numAlunos) {
  const gabarito = fazerCartilha(
    "Informe o gabarito de respostas: ",
    numElementos
  );

  for (let i = 0; i < numAlunos; i++) {
    const respostas = fazerCartilha(
      `Informe as respostas do aluno ${i + 1}:`,
      numElementos
    );
    const acertos = verificarAcertos(gabarito, respostas);

    console.log(`O aluno ${i + 1} teve ${acertos} acertos.`);
    if (acertos >= 12) {
      console.log("APROVADO!");
    } else {
      console.log("REPROVADO!");
    }
    console.log("\n");
  }
}

const TAMANHO = 20;
const NUMERO_DE_ALUNOS = 50;

verificarAlunos(TAMANHO, NUMERO_DE_ALUNOS);
