function idade(){
    
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    if (idade < 0){
        document.getElementById("resultado").innerText = "Invalido";
    }
    else if (idade <= 2){
        document.getElementById("resultado").innerText = `${nome} está com ${idade} e pela tabela é considerado um bebê`;
    }
    else if (idade <= 11){
        document.getElementById("resultado").innerText = `${nome} está com ${idade} e pela tabela é considerado uma criança`;
    }
    else if (idade <= 21){
        document.getElementById("resultado").innerText = `${nome} está com ${idade} e pela tabela é considerado um jovem`;
    }
    else if (idade <= 64){
        document.getElementById("resultado").innerText = `${nome} está com ${idade} e pela tabela é considerado um adulto`;
    }
    else if (idade <= 100){
        document.getElementById("resultado").innerText = `${nome} está com ${idade} e pela tabela é considerado um idoso`;
    }
    else{
        document.getElementById("resultado").innerText = `${nome} está com ${idade} e pela tabela é considerado um muito velinho`;
    }


}