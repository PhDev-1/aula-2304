let numeroSecreto = Math.floor(Math.random() * 10) + 1;

    function verificarPalpite() {
      const palpite = parseInt(document.getElementById("palpite").value);
      const resultado = document.getElementById("resultado");

      if (palpite === numeroSecreto) {
        resultado.innerText = "Parabéns! Você acertou!";
      } else if (palpite < numeroSecreto) {
        resultado.innerText = "Tente um número maior!";
      } else {
        resultado.innerText = "Tente um número menor!";
      }
    }

    function reiniciarJogo() {
      numeroSecreto = Math.floor(Math.random() * 10) + 1;
      document.getElementById("resultado").innerText = "";
      document.getElementById("palpite").value = "";
    }