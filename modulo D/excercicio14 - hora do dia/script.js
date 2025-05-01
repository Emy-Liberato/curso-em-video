function carregar() {
  var img = document.getElementById("img");
  var frase = document.getElementById("frase");
  var agora = new Date();
  var horaAtual = agora.getHours();

  frase.innerHTML = `Agora são ${horaAtual} horas`;

  if (horaAtual >= 0 && horaAtual < 12) {
    img.src = "fotomanha.png";
    document.body.style.background = "#e2cd9f";
  } else if (horaAtual <= 18) {
    img.src = "fototarde.png";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "fotonoite.png";
    document.body.style.background = "#515154";
  }
}
