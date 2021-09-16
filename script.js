var numeroSecreto = parseInt(Math.random() * 11)
var elementoResultado = document.getElementById('resultado')

var eleResultado = document.getElementById('resultado')
var tentativas = 0
var tentaivasRestantes = 3

function Chutar() {
    var chute = parseInt(document.getElementById('valor').value)
    console.log(chute)

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = 'Você acertou'
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = 'coloque um número entre 0 e 10'
    } else {
        if (chute < numeroSecreto) {
            elementoResultado.innerHTML = chute + ' Não! O numero é maior'
        } else {
            elementoResultado.innerHTML = chute + ' Não! Um pouco menos'
        }
    }
}
