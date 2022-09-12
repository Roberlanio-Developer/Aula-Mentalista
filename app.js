var numeroSecreto = parseInt(Math.random() * 11)
var limparnumero = document.getElementById("valor")
function Chutar( ) {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou";
    
    } else if (chute >10 || chute < 0){
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10"; 
        limparnumero.value=""   
    }else {
        elementoResultado.innerHTML = "errou";
        limparnumero.value=""
    }
    
}