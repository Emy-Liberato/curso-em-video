function tabuada() {
  var numero = Number(document.getElementById("numero").value);
  var resultado = document.getElementById("resultado");
  contador = 0;

  for (var contador = 1; contador <= 10; contador++) {
    resultado.innerHTML += `${contador} * ${numero} = ${contador * numero} <br>`;
  }
}
