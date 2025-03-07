let texto = prompt("Digite uma palavra:");

function inverterString(texto) {
  let rev = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    rev += texto[i];
  }
  return rev;
}
console.log(inverterString(texto));
