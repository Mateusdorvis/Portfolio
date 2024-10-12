let lista_imagens = document.querySelectorAll('.image')
let angulo = 0
let n_items = lista_imagens.length//le quantas imagens tem
let x = 360 / n_items //divide pelo numero de imgs

function animacao3d() {
    angulo -= 0.5
    lista_imagens.forEach((img, indice_img) => {
    const rotacao = angulo + (indice_img * x)
    img.style.transform = `rotateY(${rotacao}deg) translateZ(250px)`})
    requestAnimationFrame(animacao3d)
   
}
animacao3d()
