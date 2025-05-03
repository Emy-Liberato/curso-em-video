function tabuada() {
  var numero = document.getElementById("numero");
  var tab = document.getElementById("seltab");
  contador = 0;

  if (numero.value.length == 0) {
    alert("Por favor digite um número");
  } else {
    let n = Number(numero.value);

    // limpa as options antes de fazer um novo calculo 
    tab.innerHTML = ""

    // faz o calculo e adiciona as options 
    for (var contador = 1; contador <= 10; contador++) {
      let item = document.createElement("option") //cria option
      item.text =  `${n} * ${contador} = ${contador * n}` //coloca o texto na option
      item.value = `tab${c}` // adiciona um valor para a identifiaçâo
      tab.appendChild(item) // adiciona no select
    }
  }
}
