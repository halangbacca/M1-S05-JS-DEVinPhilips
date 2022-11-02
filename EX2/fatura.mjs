export default class Fatura {
  #quantia; // Variável privada
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;
    this.#quantia = quantia;
    this.preco = preco;
  }
  obterValorTotal() {
    return this.#quantia * this.preco;
  }
  get valorTotal() {
    return `Valor total: ${this.#quantia * this.preco}`;
  }
}
