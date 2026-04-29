function modo_dia(){
    document.documentElement.style.setProperty('--fundo', '#8ce8ff');
    document.documentElement.style.setProperty('--texto-botao', '#2b3555');
    document.documentElement.style.setProperty('--cor-botao', '#FFC067');
    document.getElementById("dia").style.display = "none";
    document.getElementById("noite").style.display = "block";
}
function modo_noite(){
    document.documentElement.style.setProperty('--fundo', '#1b2d53');
    document.documentElement.style.setProperty('--texto-botao', 'white');
    document.documentElement.style.setProperty('--cor-botao', 'rgb(98, 44, 122)');
    document.getElementById("noite").style.display = "none";
    document.getElementById("dia").style.display = "block";
}