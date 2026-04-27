function maior(){

    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let n3 = Number(document.getElementById("numero3").value);

    document.getElementById("resultado").innerText = `Maior: ${Math.max(n1,n2,n3)} Menor: ${Math.min(n1,n2,n3)}`

}