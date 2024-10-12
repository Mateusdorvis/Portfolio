let menu = document.getElementById('menu');
let contatos = document.getElementById('navegacao');
let header = document.getElementsByTagName('header')[0];
let sobremim = "Olá! Meu nome é Mateus da Silva Dorvis, sou autodidata em programação e tenho um profundo interesse em PHP, JavaScript e Python. Acredito que o aprendizado é um processo contínuo e, apesar de não ser rápido em enfrentar desafios, dedico-me a entender cada aspecto das linguagens que estudo. Além da programação, sou apaixonado por videogames e gosto de explorar o mundo da geografia. Meu objetivo é desenvolver soluções criativas e eficientes enquanto aprimoro minhas habilidades ao longo do tempo.";
let numero = 0;
let click = false;//esta variavel serve para verificar se o user clicou ou não
let projeto = document.getElementById('projeto1')


menu.addEventListener('click', function(){
    if(!click){
        contatos.style.opacity = '1'
        header.classList.add('menu_style');

    }
    else{
        contatos.style.transition = '.1s'
        contatos.style.opacity = '0'
        header.style.transition = '.3s'
        header.classList.remove('menu_style')
    }
    click = !click;
});

function animacaoDigitacao(){
    if(numero<sobremim.length){//0 é menor que o comprimento do texxto que fiz então
        document.getElementById('escrever').innerHTML +=  sobremim.charAt(numero);//o elemento html vai add cada caractere do texto
        numero++;
        setTimeout(animacaoDigitacao, 100);
    }
}
animacaoDigitacao();


    //este código altera a cor de fundo da página 
   let dark = document.getElementById('dark')
   let corpo = document.getElementsByTagName('body')[0]
   let filho_dark = document.getElementById('filho-dark')
   let lua = document.getElementById('lua')
   //evento do botão com click
   dark.addEventListener('click', function(){
    if(!click){//se click não é falso
        corpo.classList.add('body')
        filho_dark.style.transition = '.3s'
        filho_dark.style.transform = 'translateX(50px)'
        lua.style.color = 'yellow'
    }
    else{
        corpo.classList.remove('body')
        filho_dark.style.transition = '.3s'
        filho_dark.style.transform = 'translateX(0px)'
        lua.style.color = 'white'
    }
    click = !click;
});

let conteudo = document.getElementById('content')
function responsivo(){
    if(window.innerWidth <=768 ){
        conteudo.style.height = 'auto'
       
    }
}
responsivo()


document.addEventListener('scroll', function(){//documento adiciona evento de scroll
   
    var x = projeto.getBoundingClientRect() //pega todas as informações como altura, largura, margin, padding off
    var janela = window.innerHeight //pega a altura do documento

    if(x.top < janela && x.bottom>=0 && window.innerWidth >=768){ //É verdade que topo é maior ou igual a 0 e a parte inferior(bottom) é igual ou menor que a altura da janela? Se sim faça isso
        projeto.classList.add('on')//adiciona uma classe do css
        projeto.classList.remove('off') //remove classe do css
        }
        else{
            projeto.classList.add('off')
            projeto.classList.remove('on')
            }
    
   })