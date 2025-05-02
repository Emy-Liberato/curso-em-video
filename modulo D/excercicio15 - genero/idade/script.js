function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fano.value.length == 0 || fano.value > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img"); // cria elemento html
    img.setAttribute("id", "foto"); // atribui um ID

    // faz verificação de sexo e idade e atribui uma foto
    if (fsex[0].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "bebemulher.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "jovemmulher.png");
      } else if (idade < 50) {
        // adulta
        img.setAttribute("src", "adultamulher.png");
      } else {
        // idosa
        img.setAttribute("src", "idosamulher.png");
      }
    } else if (fsex[1].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "bebehomem.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "jovemhomem.png");
      } else if (idade < 50) {
        // adulta
        img.setAttribute("src", "adultohomem.png");
      } else {
        // idosa
        img.setAttribute("src", "idosohomem.png");
      }
    }

    // verifica o sexo escolhido
    if (fsex[0].checked) {
      genero = "mulher";
    } else if (fsex[1].checked) {
      genero = "homem";
    }

    // mostra sexo e idade na tela
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
