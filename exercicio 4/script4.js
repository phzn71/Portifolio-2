function media() {
    let nota1 = Number(window.prompt("Digite a primeira nota: "));
    let nota2 = Number(window.prompt("Digite a segunda nota: "));
    let nota3 = Number(window.prompt("Digite a terceira nota: "));

    let media = (nota1 + nota2 + nota3) / 3;

    let resultado = document.querySelector('#resultado');
    mostraResultado.innerHTML= `<p> O resultado é ${nota.toFixed(1)}</p>`;
    console.log(resultado);

    if ( media > 60) {
       resultado = document.querySelector('#resultado');
       resultado.innerHTML= `<p>Voce foi aprovado ${nota.toFixed(1)}</p>`
       console.log("voce foi aprovado");
       alert(resultado)
    }
 else {
        let dif = 60 <= media;
     resultado = document.querySelector('#resultado');
      resultado.innerHTML= `<p>voce foi reprovado e faltam ${dif.toFixed(1)} pontos</p>`
      alert(resultado)
    }
}
