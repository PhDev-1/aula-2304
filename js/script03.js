function classificarIdade() {
    const idade = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
    let classificacao = "";
  
    if (idade < 0) {
      classificacao = "Idade inválida.";
    } else if (idade <= 12) {
      classificacao = "Criança";
    } else if (idade <= 17) {
      classificacao = "Adolescente";
    } else if (idade <= 59) {
      classificacao = "Adulto";
    } else {
      classificacao = "Idoso";
    }
  
    resultado.innerHTML = `<li>${classificacao}</li>`;
  }
  