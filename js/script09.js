function converter() {
    const horas = parseFloat(document.getElementById("horas").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(horas) || horas < 0) {
        resultado.textContent = "Por favor, insira um número válido de horas.";
        resultado.style.color = "red";
        return;
    }

    const minutos = horas * 60; // Converte horas para minutos
    const segundos = horas * 3600; // Converte horas para segundos

    resultado.textContent = `${horas} hora(s) é igual a ${minutos} minuto(s) e ${segundos} segundo(s).`;
    resultado.style.color = "green";
}