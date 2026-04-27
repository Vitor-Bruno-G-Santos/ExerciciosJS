function sexo(){
    let genero = document.getElementById("sexo").value;
    
    if(genero.toUpperCase() == "M"){
        document.getElementById("resultado").innerText = "M - Masculino";
    }

    else if(genero.toUpperCase() == "F"){
        document.getElementById("resultado").innerText = "F - Feminino";
    }
    else{
        document.getElementById("resultado").innerText = "Sexo Invalido";
    }
}