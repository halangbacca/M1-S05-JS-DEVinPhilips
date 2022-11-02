export default class Juros {
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }
  calcularJurosSimples() {
    return `Juros Simples R$: ${
      this.capitalInicial * this.taxaAplicada * this.tempo
    }`;
  }
  calcularJurosCompostos() {
    return `Juros Compostos R$: ${
      this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo
    }`;
  }
}
