/*
48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

function combinarObjetos(objeto1, objeto2) {
  const objetoCombinado = {};

  for (const key in objeto1) {
    objetoCombinado[key] = objeto1[key];
  }

  for (const key in objeto2) {
    if (objetoCombinado[key]) {
      objetoCombinado[key] += objeto2[key];
    } else {
      objetoCombinado[key] = objeto2[key];
    }
  }
  return objetoCombinado;
}

const inventario1 = { a: 1, b: 2 };
const inventario2 = { b: 3, c: 4 };

const objetoCombinado = combinarObjetos(inventario1, inventario2);

console.log(objetoCombinado);
