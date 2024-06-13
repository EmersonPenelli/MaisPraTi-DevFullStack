/*
49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function criarObjetoTransacoes(transacoes) {
  let objetoTransacoes = {};

  for (let i = 0; i < transacoes.length; i++) {
    let categoria = transacoes[i].categoria;

    if (objetoTransacoes[categoria]) {
      objetoTransacoes[categoria].arrayTransacoes.push(transacoes[i]);
      objetoTransacoes[categoria].subTotal += transacoes[i].valor;
    } else {
      objetoTransacoes[categoria] = {
        arrayTransacoes: [transacoes[i]],
        subTotal: transacoes[i].valor,
      };
    }
  }

  return objetoTransacoes;
}

const TRANSACOES = [
  { id: 1, valor: 100, data: new Date(2016, 11, 12), categoria: "deposito" },
  { id: 2, valor: 200, data: new Date(2017, 11, 12), categoria: "boleto" },
  { id: 3, valor: 150, data: new Date(2018, 11, 12), categoria: "pix" },
  { id: 4, valor: 300, data: new Date(2019, 11, 12), categoria: "saque" },
  { id: 5, valor: 250, data: new Date(2020, 11, 12), categoria: "deposito" },
];

const objetoTransacoes = criarObjetoTransacoes(TRANSACOES);

for (const categoria in objetoTransacoes) {
  console.log(`Categoria: ${categoria}`);
  console.log("Transações:", objetoTransacoes[categoria].arrayTransacoes);
  console.log("Subtotal:", objetoTransacoes[categoria].subTotal);
  console.log();
}
