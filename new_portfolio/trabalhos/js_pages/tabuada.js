
document.getElementsByTagName('button')[0].addEventListener('click', () =>{
    let resultado = document.getElementById('resultado') 
    let n = parseInt(document.getElementById('n').value)//pega o valor da input
    resultado.innerHTML = ""//a cada click vai limpando a tabela
    for(let numero = 0; numero<=10; numero++){//e também adicionando novas linhas e células 
        var conta = `<tr> <td> ${numero} x ${n} = ${numero*n} </td> </tr>`
        resultado.innerHTML += conta//a cada loop adiciona uma nova linha
    }
})