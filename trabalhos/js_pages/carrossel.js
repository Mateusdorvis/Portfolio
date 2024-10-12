let imagens = document.querySelectorAll('.imagem');
let index_img = 0;

document.getElementById('proximo').addEventListener('click', () => {
    imagens[index_img].classList.remove('ativar');
    index_img = (index_img + 1) % imagens.length;  //aqui soma o valor atual  do indice da imagem e calcula o resto, vamos supor que a img está no valor 0, 0+1 = 1 e o resto da divisão de 1 / 5 é 1, enquanto o quociente = 0.2
    imagens[index_img].classList.add('ativar');
});

document.getElementById('anterior').addEventListener('click', () => {
    imagens[index_img].classList.remove('ativar');
    index_img = (index_img - 1 + imagens.length) % imagens.length; 
    imagens[index_img].classList.add('ativar');
});
