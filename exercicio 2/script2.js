function calculo () {
    let anoNascimento = 0;
    let idade = 0;

     anoNascimento = Number(window.prompt('Digite o ano em que voce'))
    
    alert("Sua idade é " + idade);

    if(idade >  18){
        alert("Pode tirar a carteira de motorista");
 } else {
        let dif = 18 - idade;
        alert("Voce nao pode tirar a carteira de motorista pois ainda faltam " + dif + "anos para completar 18 anos.");
    }
}