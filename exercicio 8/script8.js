 function verificarEstacao(){
        let mes = prompt("Digite o mês").toUpperCase();
        let estacao = "";
        let corFundo = "";

        if ("DEZEMBRO JANEIRO FEVEREIRO".indexOf(mes) >= 0) {
            estacao = "VERÃO";
            corFundo = "yellow";
        }


        else if ("MARÇO ABRIL MAIO".indexOf(mes) >= 0) {
            estacao = "OUTONO";
            corFundo = "orange";
        }



        else if ("JUNHO JULHO AGOSTO".indexOf(mes) >= 0) {
            estacao = "INVERNO";
            corFundo = "lightblue";
        }


        else if ("SETEMBRO OUTUBRO NOVEMBRO".indexOf(mes) >= 0) {
            estacao = "PRIMAVERA";
            corFundo = "lightgreen";
        }



        else {
            estacao = "MÊS INVÁLIDO";
            corFundo = "gray";
        }


        
        document.body.style.backgroundColor = corFundo;
        document.getElementById("resultado").innerText = "Estação: " + estacao;
    }