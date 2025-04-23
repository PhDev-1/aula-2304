function calcularFatorial() {
    const num = parseInt(document.getElementById("numero").value);
    let resultado = 1;

    if (num < 0) {
      document.getElementById("resultado").innerText = "Número inválido. Digite um número positivo.";
      return;
    }

    for (let i = 1; i <= num; i++) {
      resultado *= i;
    }

    document.getElementById("resultado").innerText = `Fatorial de ${num} é ${resultado}`;
  }