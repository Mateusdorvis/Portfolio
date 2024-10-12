let body = document.getElementsByTagName('body')[0]
var h1 = document.getElementById('mostraHora')

function ShowHours(){
    let ClasseHora = new Date();
    //pega as horas minutos e segundos com a classe dte
    let hora = ClasseHora.getHours() 
    let minutos = ClasseHora.getMinutes()
    let segundos = ClasseHora.getSeconds()
    
    h1.innerHTML = `${hora} : ${minutos} : ${segundos} `
    if(hora>=12 && hora<=18){
        body.style.backgroundImage = 'url(https://images.wallpaperscraft.com/image/single/japan_shirakawa_houses_112963_3840x2160.jpg)'
    }
    else if(hora>=6 && hora<12){
        body.style.backgroundImage = "url(https://images.wallpaperscraft.com/image/single/road_turn_autumn_1306980_1280x720.jpg)"
    }
    else{
        body.style.backgroundImage = "url(https://images.wallpaperscraft.com/image/single/montreal_night_city_79286_1280x720.jpg)"
    }


}
//atualiza a cada 1000 milissegundos
setInterval(ShowHours, 1000)