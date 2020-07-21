function botao(num){
    var tela = document.calculadora.visor.value;
    document.calculadora.visor.value = tela + num;
}

function calcule(){
    var result = eval(document.calculadora.visor.value);
    document.calculadora.visor.value = result.toFixed(2);
    var res = document.getElementById('tela').value;
    var alerta = document.getElementById('resultado');
    alerta.innerHTML = `O resultado do seu cálculo é ${res}.`;
}

function limpar(){
    document.calculadora.visor.value = "";
    document.getElementById('resultado').innerHTML = "O resultado do seu cálculo é...";
}