function calcular() {
    var precoAlcool = parseFloat(document.getElementById("alcool").value.replace(",", "."));
    var precoGasolina = parseFloat(document.getElementById("gasolina").value.replace(",", "."));
  
    if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
      alert("Preencha ambos os valores para calcular.");
      return;
    }
  
    var resultado = precoAlcool / precoGasolina;
  
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
  
    if (resultado < 0.7) {
      resultadoElement.innerHTML = "Melhor abastecer com Álcool.";
    } else {
      resultadoElement.innerHTML = "Melhor abastecer com Gasolina.";
    }
  }
  