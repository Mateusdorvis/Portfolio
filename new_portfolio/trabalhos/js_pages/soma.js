
document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
    let resultado=  document.getElementById('resultado')
    let n1 = parseInt(document.getElementById('numero').value)
    let n2 = parseInt(document.getElementById('numero2').value)
    let soma = n1+n2
    resultado.innerHTML = soma
})