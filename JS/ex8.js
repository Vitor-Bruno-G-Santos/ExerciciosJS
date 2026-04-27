function pagamento(){
    let valor = Number(document.getElementById("valor-hora").value);
    let tempo = Number(document.getElementById("tempo").value);
    let bruto = valor * tempo;

    if(bruto <= 900){
        document.getElementById("bruto").innerText = `   Salario Bruto: (${tempo} * ${valor})   :R$ ${bruto}`;
        document.getElementById("ir").innerText = `         (-)IR (Isento)          :R$ 0,00`;
        document.getElementById("inss").innerText = `         (-)Sindicato (3%)        :R$ ${bruto *0.03}`;
        document.getElementById("fgts").innerText = `         FGTS (11%)               :R$ ${bruto * 0.11}`;
        document.getElementById("descontos").innerText = `              Total de descontos          :R$ ${(bruto * 0.03)}`;
        document.getElementById("liquido").innerText = `              Salario Liquido              :R$ ${bruto - (bruto * 0.03)}`;
    }
}