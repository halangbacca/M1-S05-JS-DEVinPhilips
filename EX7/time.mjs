import Partida from "./partida.mjs";

export default class Time {
  constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos) {
    this.nome = nome;
    this.sigla = sigla;
    this.vitorias = vitorias;
    this.derrotas = derrotas;
    this.empates = empates;
    this.golsMarcados = golsMarcados;
    this.golsSofridos = golsSofridos;
  }
  computarPartida(){
    const primeiraPartida = new Partida()

  }
}
