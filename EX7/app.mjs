import Time from "./time.mjs";
import Partida from "./partida.mjs";

const aplicacaoA = new Juros(10000, 0.07, 24);
const aplicacaoB = new Juros(10000, 0.125, 120);

console.log(aplicacaoA.calcularJurosSimples());
console.log(aplicacaoA.calcularJurosCompostos());

console.log(aplicacaoB.calcularJurosSimples());
console.log(aplicacaoB.calcularJurosCompostos());
