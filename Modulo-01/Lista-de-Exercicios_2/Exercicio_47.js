/*
47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

function aplicarFuncaoEmPropriedades(objeto, funcao) {
  let novoObjeto = {};
  for (let propriedade in objeto) {
    novoObjeto[propriedade] = funcao(objeto[propriedade]);
  }
  return novoObjeto;
}

const objetoEntrada = {
  a: 1,
  b: 2,
  c: 3,
};

let dobrar = function (valor) {
  return valor * 2;
};

const objetoResultado = aplicarFuncaoEmPropriedades(objetoEntrada, dobrar);
console.log(objetoResultado);
