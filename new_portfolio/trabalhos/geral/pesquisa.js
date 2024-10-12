let links = [
    '../main.html',
    'parallax.html',
    'flex_grid.html',
    'carrossel.html',
    'homepage.html',
    'carrossel3d.html',
    'imc.html',
    'signo.html',
    'relogio.html',
    'tabuada.html',
    'soma.html',
    'landingpage.html',
    'cronometro.html',
    'calculadora.html',
    'cidade.html'
];

let nome = [
    'Main',
    'Paralax',
    'Flex Grid',
    'Carrossel',
    'Homepage',
    'Carrossel 3D',
    'IMC',
    'Signo',
    'Relógio',
    'Tabuada',
    'Soma',
    'Landing Page',
    'Cronômetro',
    'Calculadora',
    'Albúm de fotos'
];

let ol = document.getElementById('lista');

// Função para preencher a lista completa de links
function preencherListaCompleta() {
    ol.innerHTML = ""; // Limpa a lista antes de preencher
    links.forEach((link, indice) => {
        let li = document.createElement('li');
        li.innerHTML = `<a href="${link}">${nome[indice]}</a>`;
        ol.appendChild(li);
    });
}

// Função para filtrar a lista com base na pesquisa
function filtrarLista(pesquisa) {
    ol.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

    let resultadosEncontrados = false; // Variável para verificar se há resultados

    nome.forEach((nome_do_site, index) => {
        if (nome_do_site.toLowerCase().includes(pesquisa.toLowerCase())) { // Usa includes para permitir busca parcial
            let li = document.createElement('li');
            li.innerHTML = `<a href="${links[index]}">${nome_do_site}</a>`;
            ol.appendChild(li);
            resultadosEncontrados = true; // Se encontramos um resultado, alteramos a variável
        }
    });

    // Se nenhum resultado for encontrado, mostra a lista completa novamente
    if (!resultadosEncontrados) {
        preencherListaCompleta();
    }
}

// Inicializa a lista completa de links ao carregar a página
preencherListaCompleta();

// Adiciona evento ao campo de pesquisa
let pesquisaInput = document.getElementById('site');
pesquisaInput.addEventListener('keyup', () => {
    let pesquisa = pesquisaInput.value.trim(); // Captura o valor do input e remove espaços em branco
    if (pesquisa === "") {
        // Se o campo de pesquisa estiver vazio, mostra a lista completa
        preencherListaCompleta();
    } else {
        // Caso contrário, faz a filtragem
        filtrarLista(pesquisa);
    }
});
let tag_link = document.createElement('link');
tag_link.setAttribute('rel', 'icon');
tag_link.setAttribute('href', '../img/logo.png'); // Corrigido para o caminho correto
tag_link.setAttribute('sizes', '16x16 32x32 48x48');

document.head.appendChild(tag_link);

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {//hidden é uma propriedade do DOM que é booleana
        document.title = 'Volte por favor!';
    } else {
        document.title = 'Página atual.';
    }
});
