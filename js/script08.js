function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // tira caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // CPF inválido (todos os números iguais)
    }

    let soma = 0;
    let resto;

    // validar do primeiro dígito
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;
    // validação do segundo dígito
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true; // CPF válido
}

function validar() {
    const cpf = document.getElementById("cpf").value;
    const resultado = document.getElementById("resultado");

    if (validarCPF(cpf)) {
        resultado.textContent = "CPF válido!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "CPF inválido!";
        resultado.style.color = "red";
    }
}