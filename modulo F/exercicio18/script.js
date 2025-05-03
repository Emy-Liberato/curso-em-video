let vetor = [];
let inputNumero = document.getElementById("numero");
let tabela = document.getElementById("tabela");
let res = document.getElementById("res");

function adicionar() {
  let numero = Number(inputNumero.value);

  // valida se o numero é valido e adiciona no HTML
  if (
    inputNumero.value.length == 0 ||
    inputNumero.value > 100 ||
    inputNumero.value < 1 ||
    vetor.indexOf(numero) !== -1
  ) {
    alert("Insira um número válido ou que ainda não foi adicionado!");
  } else {
    vetor.push(numero);

    let item = document.createElement("option");
    item.text = `Valor ${numero} adicionado`;
    tabela.appendChild(item);

    inputNumero.value = ""; // limpa o campo
    inputNumero.focus(); // volta o foco pro input
  }
}

function finalizar() {
  let maior = vetor[0];
  let menor = vetor[0];
  let soma = 0;
  let media = 0;

  // valida maior e menor numero e soma os valores
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];

    if (vetor[i] > maior) {
      maior = vetor[i];
    }
    if (vetor[i] < menor) {
        menor = vetor[i];
    };
  }

  media = soma / vetor.length;

  // mostra os resultados
  res.innerHTML = "";
  res.innerHTML += `Ao todo temos ${vetor.length} números cadastrados.<br>`;
  res.innerHTML += `O maior valor informado foi ${maior}.<br>`;
  res.innerHTML += `O menor valor encontrado foi ${menor}.<br>`;
  res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`;
  res.innerHTML += `A média dos valores digitados é ${media}.<br>`;
}
