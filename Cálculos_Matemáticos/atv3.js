let n = parseInt(prompt("Digite um número: "));

function calcularFatorial(n) {
  let resultado = 1;
  for (let i = n; i > 0; i--) {
    resultado = resultado * i;
  }
  console.log(`o resultado é: ${resultado}`);
}
calcularFatorial(n);
