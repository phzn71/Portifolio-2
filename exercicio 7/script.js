let mostraResultado = document.querySelector("#resultado");
let inscritos = 0;

function contar(){

    inscritos += 1;
    times = parseInt(inscritos);

mostraResultado.innerHTML = `<p> Número de cliques: ${inscritos};</p>`

    if(inscritos >=10){
            
    }
}

    function zerar(){
        inscritos = 0;
        mostraResultado.innerHTML = `<p> numero de cliques 0</p>;`
    }