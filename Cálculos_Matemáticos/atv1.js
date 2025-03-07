let a = parseFloat(prompt("Digite o primeiro número: "));
let b = parseFloat(prompt("Digite o segundo número: "));

function calcularHipotenusa(a, b) {
  calcularHipotenusa = a * a + b * b;
  calcularHipotenusa = Math.sqrt(calcularHipotenusa);
  console.log(calcularHipotenusa);
}
calcularHipotenusa(a, b);
