function contar() {
    let inicio = document.getElementById("inicio").value;
    let fim = document.getElementById("fim").value;
    let passo = document.getElementById("passo").value;
    let resultado = document.getElementById("resultado");

    inicio = Number(inicio);
    fim = Number(fim);
    passo = Number(passo);

    for (let i = inicio; i <= fim; i += passo) {
        resultado.innerHTML += ` ${i} \u{1F449}`; 
    }

    resultado.innerHTML += ` \u{1F3C1}`;
}
