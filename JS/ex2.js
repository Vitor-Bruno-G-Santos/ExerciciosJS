function positivo(){
    let numero = Number(document.getElementById("numero").value);

    if(numero < 0){
        document.getElementById("resultado").innerText = "Negativo";
    }

    else{
        document.getElementById("resultado").innerText = "Positivo";
    }

}