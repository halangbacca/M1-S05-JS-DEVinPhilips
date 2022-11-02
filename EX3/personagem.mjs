export default class Personagem {
  constructor(nome, percentualVida) {
    this.nome = nome = "Alyx";
    this.percentualVida = percentualVida = 100;
  }
  sofreuDano(percentualDano) {
    return (this.percentualVida -= percentualDano);
  }
  usouKitMedico() {
    return (this.percentualVida += 10);
  }
}
