function media() {
    let n1 = Number(window.prompt("Digite a 1° nota"));
    let n2 = Number(window.prompt("Digite a 2° nota"));
    let n3 = Number(window.prompt("Digite a 3° nota"));
    let nota = (n1 + n2 + n3) / 3;
    
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p> O resultado é ${nota.toFixed(1)}</p>`;
    console.log(resultado);

     if( nota >6){
              resultado = document.querySelector('#resultado');
              resultado.innerHTML = `<p> Você foi aprovado ${nota.toFixed(1)}</p>`
              console.log("Você foi aprovado");
       } else{
         let dif = 6 - nota;
              resultado = document.querySelector('#resultado');
              resultado.innerHTML = `<p> Você foi reprovado e faltam ${dif.toFixed(1)} pontos</p>`;
           
       }
    }