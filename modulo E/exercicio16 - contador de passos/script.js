function contar() {
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let res = document.getElementById("resultado");

//  valida se a input está vazia 
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML += "Impossivel contar!";
  } else {
    res.innerHTML = "Contando: </br>";
    
    // tranforma os dados em Number 
    inicio = Number(inicio.value);
    fim = Number(fim.value);
    passo = Number(passo.value);

    if (passo <= 0) {
        alert("Passo invalido! Consideramos passo = 1")
        passo = 1;
    }

    if (inicio < fim) {
        // contagem crescente 
      for (let i = inicio; i <= fim; i += passo) {
        resultado.innerHTML += ` ${i} \u{1F449}`;
      }
    } else {
        // contagem regressiva 
        for (let i = inicio; i >= fim; i -= passo) {
            resultado.innerHTML += ` ${i} \u{1F449}`;
        }
    }
    resultado.innerHTML += ` \u{1F3C1}`;
  }
}
