let min = parseInt(prompt("Digite um número: "));
let max = parseInt(prompt("Digite um número: "));

function gerarNumeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(gerarNumeroAleatorio(min, max).toFixed(0));
