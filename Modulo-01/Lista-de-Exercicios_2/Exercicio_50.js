/*
50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.

2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.

3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.
*/

const prompt = require("prompt-sync")();

function receberEntradaInteira(mensagem, limite) {
  if (limite == undefined) {
    limite = Number.MAX_SAFE_INTEGER;
  }
  let inteiro = "a";
  do {
    try {
      inteiro = parseInt(prompt(mensagem));
    } catch (error) {
      console.log(
        "Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)"
      );
      inteiro = "a";
    }
    if (inteiro < 0) {
      console.log(
        "Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)"
      );
      inteiro = "a";
    } else if (inteiro > limite) {
      console.log(
        "Informe um número inteiro, positivo válido menor ou igual a " +
          limite +
          "!"
      );
      inteiro = "a";
    } else if (isNaN(inteiro)) {
      inteiro = "a";
      console.log(
        "Informe um número inteiro, positivo válido menor ou igual a " +
          limite +
          "!"
      );
    }
  } while (inteiro == "a");
  return inteiro;
}

class Hotel {
  static hoteis = [];
  static contadorIds = 0;
  static NOTAMAXIMA = 10;
  static NOTAMINIMA = 0;

  constructor(id, nome, cidade, quartosTotais) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosTotais;
    this.somaAvaliacoes = 0;
    this.contadorAvaliacoes = 0;
    this.reservas = [];
  }
}

class Reserva {
  static contadorIds = 0;
  constructor(id, idHotel, nomeCliente) {
    this.id = id;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
    this.checkIn = false;
    this.checkOut = false;
    this.avaliado = false;
  }
}

const encontrarHotelPorId = (id) =>
  Hotel.hoteis.find((hotel) => hotel.id === id);
const encontrarReservaPorId = (id) => {
  for (const hotel of Hotel.hoteis) {
    for (const reserva of hotel.reservas) {
      if (id === reserva.id) {
        return reserva;
      }
    }
  }
  return false;
};

function adicionarHotel(nome, cidade, quartosTotais) {
  let id;
  if (Hotel.contadorIds >= 0) {
    id = Hotel.contadorIds++;
  }
  const hotel = new Hotel(id, nome, cidade, quartosTotais);
  Hotel.hoteis.push(hotel);
  console.log(`Hotel adicionado com sucesso!`);
  return id;
}

function buscarHoteisPorCidade(cidade) {
  return Hotel.hoteis.filter((hotel) => hotel.cidade === cidade);
}

function listarVagasDisponiveisCidade(cidade) {
  let hoteis = buscarHoteisPorCidade(cidade);
  if (hoteis.length > 0) {
    for (const hotel of hoteis) {
      console.log(
        hotel.nome +
          " de ID igual a " +
          hotel.id +
          " localizado na cidade " +
          cidade +
          " tem " +
          listarVagasDisponiveisHotel(hotel) +
          " vagas disponíveis;"
      );
      if (hotel.contadorAvaliacoes > 0) {
        console.log(
          `Avaliação: ${hotel.somaAvaliacoes / hotel.contadorAvaliacoes}`
        );
      } else {
        console.log(`Hotel ainda não avaliado!`);
      }
    }
  } else {
    console.log(
      `Não há hotéis disponíveis para a cidade com nome igual a: ${cidade}!`
    );
  }
}

function listarVagasDisponiveisHotel(hotel) {
  return hotel.quartosDisponiveis;
}

function listarCidadesVagaDisponivel() {
  let cidades = new Set();
  for (const hotel of Hotel.hoteis) {
    if (hotel.quartosDisponiveis > 0) {
      cidades.add(hotel.cidade);
    }
  }
  return cidades;
}

function fazerReserva(idHotel, nomeCliente) {
  const hotel = encontrarHotelPorId(idHotel);
  if (hotel && hotel.quartosDisponiveis > 0) {
    hotel.quartosDisponiveis--;

    if (Reserva.contadorIds >= 0) {
      idReserva = Reserva.contadorIds++;
    }

    const reserva = new Reserva(idReserva, idHotel, nomeCliente);
    hotel.reservas.push(reserva);
    console.log(
      `Reserva de ID ${reserva.id} no hotel ${hotel.nome} (ID=${hotel.id}) realizada com sucesso!`
    );
    return idReserva;
  }

  console.log(`Reserva no hotel ${hotel.nome} (ID=${hotel.id}) foi recusada!`);
  if (hotel) {
    console.log(`Número de vagas igual a ${hotel.quartosDisponiveis}!`);
  } else {
    console.log(`Hotel não existe!`);
  }
  return false;
}

function cancelarReserva(idReserva) {
  let reserva = encontrarReservaPorId(idReserva);
  if (reserva != false) {
    if (reserva.checkOut) {
      console.log(`Reserva não foi cancelada, pois o check-out já foi feito!`);
      return false;
    } else if (reserva.checkIn) {
      console.log(`Reserva não foi cancelada, pois o check-in já foi feito!`);
      return false;
    } else {
      let hotel = encontrarHotelPorId(reserva.idHotel);
      const reservaIndex = hotel.reservas.findIndex(
        (reserva) => reserva.id === idReserva
      );
      if (reservaIndex !== -1) {
        hotel.quartosDisponiveis++;
        hotel.reservas.splice(reservaIndex, 1);
        console.log(
          `Reserva de ID ${idReserva} no hotel ${hotel.nome} (ID=${hotel.id}) foi cancelada!`
        );
        return true;
      }
    }
  }
  console.log(
    `Reserva não foi cancelada devido a não ter sido encontrada no sistema!`
  );
  return false;
}

function listarReservas() {
  reservas = {};
  for (const hotel of Hotel.hoteis) {
    reservas[hotel.nome] = [];
    for (const reserva of hotel.reservas) {
      reservas[hotel.nome].push(reserva);
    }
  }
  return reservas;
}

function checkIn(idReserva) {
  let reserva = encontrarReservaPorId(idReserva);
  if (reserva != false) {
    if (!reserva.checkIn) {
      reserva.checkIn = true;
      console.log(
        `Check-in para reserva de ID ${idReserva} feita com sucesso!`
      );
    } else {
      console.log(
        `Check-in para reserva de ID ${idReserva} falhou, o check-in já havia sido feito anteriormente!`
      );
    }
  } else {
    console.log(
      `Check-in para reserva de ID ${idReserva} falhou, reserva não existe!`
    );
  }
}

function checkOut(idReserva) {
  let reserva = encontrarReservaPorId(idReserva);
  if (reserva != false) {
    if (!reserva.checkOut) {
      if (reserva.checkIn) {
        reserva.checkOut = true;
        let hotel = encontrarHotelPorId(reserva.idHotel);
        hotel.quartosDisponiveis++;
        console.log(
          `Check-out para reserva de ID ${idReserva} feita com sucesso!`
        );
      } else {
        console.log(
          `Check-out não realizado, o check-in deve ser feito antes de ser possível fazer check-out!`
        );
      }
    } else {
      console.log(
        `Check-out para reserva de ID ${idReserva} falhou, o check-out já havia sido feito anteriormente!`
      );
    }
  } else {
    console.log(
      `Check-out para reserva de ID ${idReserva} falhou, reserva não existe!`
    );
  }
}

function imprimirPropriedadesHotel(id) {
  let hotel = encontrarHotelPorId(id);
  console.log(`\n    Nome do Hotel: ${hotel.nome};
    ID do hotel: ${id};
    Cidade: ${hotel.cidade};
    Quartos totais: ${hotel.quartosTotais};
    Quartos disponíveis: ${hotel.quartosDisponiveis}`);
}

function imprimirReservasHotel(id, retirarReservasCheckout) {
  let hotel = encontrarHotelPorId(id);
  for (const reserva of hotel.reservas) {
    if (retirarReservasCheckout) {
      if (reserva.checkOut) {
        continue;
      }
    }
    console.log(`\n        ID da reserva: ${reserva.id};
        Nome do cliente: ${reserva.nomeCliente};
        Check-in: ${reserva.checkIn};
        Check-out: ${reserva.checkOut}`);
  }
}

function fazerRelatorioHotel(id, retirarReservasCheckout) {
  imprimirPropriedadesHotel(id);
  imprimirAvaliacao(id);
  imprimirReservasHotel(id, retirarReservasCheckout);
}

function avaliar(idReserva) {
  let reserva = encontrarReservaPorId(idReserva);
  if (reserva != false) {
    if (reserva.checkOut) {
      if (!reserva.avaliado) {
        let avaliacao = receberEntradaInteira(
          "Informe um valor inteiro para a sua avaliação do hotel, valores de 0 a 10 (10 = muito bom, 0= muito ruim)!    ",
          Hotel.NOTAMAXIMA
        );
        let hotel = encontrarHotelPorId(reserva.idHotel);
        hotel.somaAvaliacoes += avaliacao;
        hotel.contadorAvaliacoes++;
        reserva.avaliado = true;
        console.log(`Avaliação feita com sucesso para o ${hotel.nome}!`);
      } else {
        console.log(`Avaliação já foi feita para esta reserva!`);
      }
    } else {
      console.log(`Avaliação somente pode ser feita após o check-out!`);
    }
  } else {
    console.log(`Reserva não existe!`);
  }
}

function imprimirAvaliacao(idHotel) {
  let hotel = encontrarHotelPorId(idHotel);
  if (hotel.contadorAvaliacoes > 0) {
    console.log(
      `\n    Avaliação: ${hotel.somaAvaliacoes / hotel.contadorAvaliacoes}`
    );
  } else {
    console.log(`\n    Hotel ainda não avaliado!`);
  }
}

// Simulação
let idHotel1 = adicionarHotel("Hotel A", "Cidade X", 5);
let idHotel2 = adicionarHotel("Hotel B", "Cidade Y", 10);
let idHotel3 = adicionarHotel("Hotel C", "Cidade Z", 3);

listarVagasDisponiveisCidade("Cidade X");
listarVagasDisponiveisCidade("Cidade Y");
listarVagasDisponiveisCidade("Cidade W");

let idReserva1 = fazerReserva(idHotel1, "Cliente 1");
let idReserva2 = fazerReserva(idHotel1, "Cliente 2");
let idReserva3 = fazerReserva(idHotel2, "Cliente 3");

checkIn(idReserva1);
checkIn(idReserva2);
checkOut(idReserva1);
checkOut(idReserva2);

cancelarReserva(idReserva3);

fazerRelatorioHotel(idHotel1, true);
fazerRelatorioHotel(idHotel2, true);

avaliar(idReserva1);
avaliar(idReserva2);

fazerRelatorioHotel(idHotel1, false);
