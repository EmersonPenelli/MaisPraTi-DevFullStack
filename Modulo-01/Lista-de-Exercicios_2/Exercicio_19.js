/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require("prompt-sync")();

function validarHorario(stringHorario) {
  try {
    const [horas, minutos, segundos] = stringHorario.split(".").map(Number);
    if (horas < 0 || horas > 23) {
      console.log(
        "Erro: informe um horário válido! A hora deve ser maior ou igual a 0 e menor que 24!"
      );
      return false;
    }
    if (minutos < 0 || minutos >= 60) {
      console.log(
        "Erro: informe um horário válido! O minuto deve ser maior ou igual a 0 e menor que 60!"
      );
      return false;
    }
    if (segundos < 0 || segundos >= 60) {
      console.log(
        "Erro: informe um horário válido! O segundo deve ser maior ou igual a 0 e menor que 60!"
      );
      return false;
    }
    return true;
  } catch (error) {
    console.log("Erro: informe um horário válido!");
    return false;
  }
}

function receberHorario() {
  let stringHorario;
  let valido = false;
  do {
    stringHorario = prompt("Informe um horário no padrão HH.MM.SS: ");
    valido = validarHorario(stringHorario);
  } while (!valido);
  return stringHorario.split(".").map(Number);
}

let listaHorarios = [];
for (let index = 0; index < 5; index++) {
  listaHorarios.push(receberHorario());
}

console.log("\nHorários informados (HH.MM.SS):");
for (let horario of listaHorarios) {
  console.log(
    `${horario[0].toString().padStart(2, "0")}.${horario[1]
      .toString()
      .padStart(2, "0")}.${horario[2].toString().padStart(2, "0")}`
  );
}
