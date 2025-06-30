function subtrair() {
 
    let idade = 0;

    idade = Number(window.prompt("digite sua data de nascimento"));

    let resul = 2025 - idade
   
     
     if(resul > 18) {
         alert("voce ja pode tirar a habilitacao");
     } else{
         alert("voce ainda nao pode tirar a habilitacao. ");
         alert("voce ainda precisa esperar essa idade:");
         alert(resul)
     } 
        
}