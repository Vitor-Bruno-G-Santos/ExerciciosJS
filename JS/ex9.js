function triangulo(){
    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);

    if (lado1 + lado2 > lado3 && lado3 + lado1 > lado2 && lado3 + lado2 > lado1){
        if (lado1 == lado2 && lado2 == lado3){
            document.getElementById("resultado").innerText = "Triangulo Equilatero";
        }
        else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
            document.getElementById("resultado").innerText = "Triangulo Isoceles";
        }
        else{
            document.getElementById("resultado").innerText = "Triangulo Escaleno";
        }
    }
    else{
        document.getElementById("resultado").innerText = "Triangulo Inexistente";
    }
}