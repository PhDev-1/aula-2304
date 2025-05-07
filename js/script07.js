function descobrirNumerosPrimos(){
        let inicio = Number(document.getElementById("inicio").value);
        let fim = Number(document.getElementById("fim").value);
        let resultado = "";
  
        for (let i = inicio; i <= fim; i++) {
          let primo = true;
  
          if (i < 2) {
            primo = false;
          } else {
            for (let j = 2; j <= Math.sqrt(i); j++) {
              if (i % j === 0) {
                primo = false;
                break;
              }
            }
          }
  
          if (primo) {
            resultado += i + " ";
          }
        }
  
        document.getElementById("resultado").innerText = resultado || "Nenhum número primo encontrado.";
      }