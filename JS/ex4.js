function conta(){

    let numeroConta = document.getElementById("numero-conta").value;
    let saldo = Number(document.getElementById("saldo").value);
    let debito = Number(document.getElementById("debito").value);
    let credito = Number(document.getElementById("credito").value);

    document.getElementById("resultado").innerText = (saldo + credito - debito < 0) ? `Conta numero: ${numeroConta} || Saldo atual: ${saldo + credito - debito} || Saldo negativo` : `Conta numero: ${numeroConta} || Saldo atual: ${saldo + credito - debito} || Saldo positivo`;

}