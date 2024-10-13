let falso = false
let menu = document.getElementById('menu')
let header = document.getElementsByTagName('header')[0]

let navegacao = document.getElementById('navegacao')

menu.addEventListener('click', () => {
    if (!falso) {
        navegacao.style.opacity = '1'
        header.classList.add('menu_style')
    }
    else {
        navegacao.style.opacity = '0'
        header.classList.remove('menu_style')
    }
    falso = !falso
})


let dark = document.getElementById('dark')
let corpo = document.getElementsByTagName('body')[0]
let filho_dark = document.getElementById('filho-dark')
let lua = document.getElementById('lua')
dark.addEventListener('click', function () {
    if (!falso) {
        corpo.classList.add('body')
        filho_dark.style.transition = '.3s'
        filho_dark.style.transform = 'translateX(50px)'
        lua.style.color = 'yellow'
    }
    else {
        corpo.classList.remove('body')
        filho_dark.style.transition = '.3s'
        filho_dark.style.transform = 'translateX(0px)'
        lua.style.color = 'white'
    }
    falso = !falso;
});

