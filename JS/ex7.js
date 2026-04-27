function salario(){
    let salario = Number(document.getElementById("salario").value);

    if (salario <= 0){
        document.getElementById("resultado").innerText = "Salario invalido";
    }
    else if(salario <= 280){
        document.getElementById("antes-reajuste").innerText = `Salario antes do reajuste: ${salario}`;
        let salario2 =Number(salario * 1.2);
        document.getElementById("porcentagem-aumento").innerText = "Porcentagem do aumento: 20%";
        document.getElementById("valor-aumento").innerText = `Valor do aumento: ${salario2 - salario}`;
        document.getElementById("resultado").innerText = `Salario: ${salario2}`;
    }
    else if(salario <= 700){
        document.getElementById("antes-reajuste").innerText = `Salario antes do reajuste: ${salario}`;
        let salario2 = Number(salario * 1.15);
        document.getElementById("porcentagem-aumento").innerText = "Porcentagem do aumento: 15%";
        document.getElementById("valor-aumento").innerText = `Valor do aumento: ${salario2 - salario}`;
        document.getElementById("resultado").innerText = `Salario: ${salario2}`;
    }
    else if(salario <= 1500){
        document.getElementById("antes-reajuste").innerText = `Salario antes do reajuste: ${salario}`;
        let salario2 = Number(salario * 1.10);
        document.getElementById("porcentagem-aumento").innerText = "Porcentagem do aumento: 10%";
        document.getElementById("valor-aumento").innerText = `Valor do aumento: ${salario2 - salario}`;
        document.getElementById("resultado").innerText = `Salario: ${salario2}`;
    }
    else{
        document.getElementById("antes-reajuste").innerText = `Salario antes do reajuste: ${salario}`;
        let salario2 = Number(salario * 1.05);
        document.getElementById("porcentagem-aumento").innerText = "Porcentagem do aumento: 5%";
        document.getElementById("valor-aumento").innerText = `Valor do aumento: ${salario2 - salario}`;
        document.getElementById("resultado").innerText = `Salario: ${salario2}`;
         
    }
}