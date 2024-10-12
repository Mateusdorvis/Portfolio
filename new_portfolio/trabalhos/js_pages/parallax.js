let imgs = [
    'https://4kwallpapers.com/images/walls/thumbs_3t/421.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/9864.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/10992.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/1265.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/7798.jpg', 
    'https://4kwallpapers.com/images/walls/thumbs_3t/1037.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/4074.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/8974.jpg',
]

let img_list = document.getElementsByTagName('img')
function Imagem(){
    for(let indice_img = 0; indice_img<=imgs.length;indice_img++){
         img_list[indice_img].src = `${imgs[indice_img]}`
    }
}
Imagem()
