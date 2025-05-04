let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

// verifica se o numero esta entre 1 e 100
function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

// verifica se o numero já foi inserido na lista
function inlista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

// Mostra os valores do vetor na tela 
function adicionar() {
  if (isNumero(num.value) && !inlista(num.value, valores)) {
    valores.push(Number(num.value));

    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor inválido ou já encotrado na lista");
  }

  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes de finalizar!");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0
    let media = 0

    // indentica o maior e menor valor e soma 
    for (let pos in valores) {
        soma += valores[pos];

      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }

    media = soma / tot

    // mostra os resultados da tela 
    res.innerHTML = "";
    res.innerHTML += `Ao todo temos ${tot} números cadastrados.<br>`;
    res.innerHTML += `O maior valor informado foi ${maior}.<br>`;
    res.innerHTML += `O menor valor informado foi ${menor}.<br>`;
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`;
    res.innerHTML += `A média dos valores digitados é ${media}.<br>`
  }
}
