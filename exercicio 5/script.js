  let aleatorio = parseInt(Math.random()*101)
let mostraResultado = document.querySelector("#resultado") ;
let jogador;

 function pensar() {
    jogador= Number(window.prompt("Digite um numero entre 1 e 100"));

      if(jogador != aleatorio){

    if(jogador != aleatorio){
     mostraResultado.innerHTML= `<p>Voce errou, tente outro numero MENOR</p>`
        }
        else{
        mostraResultado.innerHTML = `<p>Voce errou,tente um numero Maior</p>`
    }
  } else {
        mostraResultado.innerHTML = `<p>Parabens! Voce acertou o numero ${aleatorio}. </p>`
    }
}