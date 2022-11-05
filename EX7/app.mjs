import Time from "./time.mjs";
import Partida from "./partida.mjs";

const gre = new Time("Grêmio", "GRE");
const int = new Time("Internacional", "INT");

const p1 = new Partida("GRE", 2, "INT", 3);
const p2 = new Partida("SAN", 1, "SAO", 1);
const p3 = new Partida("INT", 1, "SAO", 2);
const p4 = new Partida("SAN", 0, "GRE", 2);

gre.computarPartida(p1);
int.computarPartida(p1);
gre.computarPartida(p2);
int.computarPartida(p2);
gre.computarPartida(p3);
int.computarPartida(p3);
gre.computarPartida(p4);
int.computarPartida(p4);

gre.exibirSituacao();
int.exibirSituacao();
