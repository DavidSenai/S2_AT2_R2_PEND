let texto = prompt("Escreva uma palavra: ");

function ehPalindromo(texto) {
  let rev = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    rev += texto[i];
  }
  if (rev === texto) {
    console.log("é palidromo");
  } else console.log("Não é palindromo");
}
ehPalindromo(texto);
