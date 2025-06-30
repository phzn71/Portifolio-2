

    let inscritos = 0;

    function registrarInscricao() {
      inscritos++;

     
      document.getElementById("inscritos").textContent = inscritos;


      const equipes = Math.floor(inscritos / 3);
      document.getElementById("equipes").textContent = equipes;

     
      const alertaDiv = document.getElementById("alerta");
      if (equipes >= 4) {
        alertaDiv.textContent = "✅ Número mínimo de equipes atingido! O campeonato pode acontecer!";
      } else {
        alertaDiv.textContent = "";
      }
    }
  