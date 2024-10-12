let lista_cores = [
    'blue',
    'green',
    '#ffa600',
    'orangered',
    'red',
    'black',

]
let sessoes = document.querySelectorAll('.sessoes')//retorna uma array
let status = [
    'Abaixo do peso',
    'Normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'

]
function Imc() {
    sessoes.forEach((cada_sessao, index) => {//a cada loop vai gerando uma cor 
        cada_sessao.style.backgroundColor = `${lista_cores[index]}`
        cada_sessao.innerHTML= `<p>${status[index]}</p>`
    })
}
Imc()

let indicador = document.getElementById('indicador')

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    indicador.style.transition = '.3s'
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let numero = peso.replace(',', '.')
    numero = parseFloat(numero)
    var message = ''//por padrão se manterá vazia
    var imc = numero / ((altura / 100) ** 2)
    if (imc >= 25.0 && imc <= 29.9) {
        message = status[2]
        indicador.style.transform = 'translateY(130px)'

    }
    else if (imc >= 30.0 && imc <= 34.9) {
        message = status[3]
        indicador.style.transform = 'translateY(170px)'
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        message = status[4]
        indicador.style.transform = 'translateY(230px)'
    }
    else if (imc >= 40.0) {
        message = status[5]
        indicador.style.transform = 'translateY(270px)'
    }
    else if (imc >= 20.0 && imc <= 24.9) {
        message = status[1]
        indicador.style.transform = 'translateY(70px)'
    }
    else if (imc <= 19.9) {
        message = status[0]
        indicador.style.transform = 'translateY(30px)'
    }
    else {
        indicador.style.transform = 'translateY(0px)'
    }

    document.getElementById('resposta').innerHTML = `Seu imc é de ${imc.toFixed(2)} e seu status de peso é : <strong> ${message} </strong>`

})
