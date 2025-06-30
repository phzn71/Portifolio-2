//calculadora simples com as 5 operacoes basica:
//adicao subtracao,multiplicacao,divisao e divisao com sobra.
// o desafio  e mostrar tambem se o resultado me impar ou par.
let num1;
let num2;
let resultado 
function sobra() {
     num1 = Number(window.prompt("digite um numero"));
     num2 = Number(window.prompt("digite outro numero"));

     resultado = num1 % num2;
        alert("o resultado e " + resultado + ".");
     numero = resultado % 2;
     alert("o resultado e " + resultado + ".");
     if (numero == 0) {
          alert("par");
     }else {
          alert("impar");
}
}

function multiplicacao() {
     num1 = Number(window.prompt("digite um numero"));
     num2 = Number(window.prompt("digite outro numero"));

     resultado = num1 * num2;
     alert("o resultado e " + resultado + ".");
     numero = resultado % 2;
     alert("o resultado e " + resultado + ".");
     if (numero == 0) {
          alert("par");
     }else {
          alert("impar");
}
}
function adicao() {
     num1 = Number(window.prompt("digite um numero"));
     num2 = Number(window.prompt("digite outro numero"));

     resultado = num1 + num2;
     alert("o resultado e " + resultado + ".");
     numero = resultado % 2;
     alert("o resultado e " + resultado + ".");
     if (numero == 0) {
          alert("par");
     }else {
          alert("impar");
}
}
function subtracao() {
     num1 = Number(window.prompt("digite um numero"));
     num2 = Number(window.prompt("digite outro numero"));

  resultado = num1 - num2;
     alert("o resultado e " + resultado + ".");
     numero = resultado % 2;
     alert("o resultado e " + resultado + ".");
     if (numero == 0) {
          alert("par");
     }else {
          alert("impar");
}
}
function divisao() {
     num1 = Number(window.prompt("digite um numero"));
     num2 = Number(window.prompt("digite outro numero"));

     resultado = num1 / num2;
     numero = resultado % 2;
     alert("o resultado e " + resultado + ".");
     if (numero == 0) {
          alert("par");
     }else {
          alert("impar");
     }
}
 