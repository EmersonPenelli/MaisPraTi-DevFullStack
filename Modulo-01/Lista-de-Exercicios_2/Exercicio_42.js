/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

function filtrarArrays(obj) {
  const newObj = {};
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const dados = {
  prop1: [1, 2, 3],
  prop2: "string",
  prop3: 42,
  prop4: ["a", "b", "c"],
  prop5: [true, false],
  prop6: 123,
};

const objetoArray = filtrarArrays(dados);
console.log(objetoArray);
