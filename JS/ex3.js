function par(){
    let numero = Number(document.getElementById("numero").value);

    if(numero % 2 == 0){
        document.getElementById("resultado").innerText = "Par";
    }
    else{
        document.getElementById("resultado").innerText = "Impar";
    }
}