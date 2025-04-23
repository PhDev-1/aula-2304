function somarPares() {
    const limite = parseInt(document.getElementById("limite").value);
    let soma = 0;
  
    for (let i = 1; i <= limite; i++) {
      if (i % 2 === 0) {
        soma += i;
      }
    }
  
    document.getElementById("resultado").innerText = "Soma dos pares: " + soma;
  }
  