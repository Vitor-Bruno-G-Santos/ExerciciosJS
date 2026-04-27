function bissexto(){
    let ano = Number(document.getElementById("ano").value);

    document.getElementById("resultado").innerText = (ano % 4 == 0) ? "Ano bissexto" : "Não é bissexto";
}