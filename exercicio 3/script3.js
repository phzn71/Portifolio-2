let num1;
let num2;
let resultado;

function sobra() {
    num1 = Number(window.prompt("Digite o primeiro numero: "));
    num2 = Number(window.prompt("Digite o primeiro numero: "));

    resultado = num1 % num2;
    numero = resultado % 2;

    alert("O resulta é "+ resultado + ".");
    if( numero == 0) {
        alert ("par");
    }else {
        alert ("impar")
    }
    
}


function adicao() {
    num1 = Number(window.prompt("Digite o primeiro numero: "));
    num2 = Number(window.prompt("Digite o primeiro numero: "));

    resultado = num1 + num2;

    numero = resultado % 2;

    alert("O resulta é "+ resultado + ".");
    if( numero == 0) {
        alert ("par");
    }else {
        alert ("impar")
    }
}


function subtracao() {
    num1 = Number(window.prompt("Digite o primeiro numero: "));
    num2 = Number(window.prompt("Digite o primeiro numero: "));

    resultado = num1 - num2;
    numero = resultado % 2;

    alert("O resulta é "+ resultado + ".");
    if( numero == 0) {
        alert ("par");
    }else {
        alert ("impar")
    }
}

function multiplicacao() {
    num1 = Number(window.prompt("Digite o primeiro numero: "));
    num2 = Number(window.prompt("Digite o primeiro numero: "));

    resultado = num1 * num2;
        numero = resultado % 2;

    alert("O resulta é "+ resultado + ".");
    if( numero == 0) {
        alert ("par");
    }else {
        alert ("impar")
    }

}


function divisao() {
    num1 = Number(window.prompt("Digite o primeiro numero: "));
    num2 = Number(window.prompt("Digite o primeiro numero: "));

    resultado = num1 / num2;
    numero = resultado % 2;

    alert("O resulta é "+ resultado + ".");
    if( numero == 0) {
        alert ("par");
    }else {
        alert ("impar")
    }
}