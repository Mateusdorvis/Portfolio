var h1 = document.getElementById('signo_h1')
var select = document.getElementById('signo')
var image = document.getElementById('image')
var paragrafo = document.getElementById('informacao')



select.addEventListener('change', function () {
    const valorSelect = select.value
    switch (valorSelect) {
        case 'aries':
            h1.textContent = 'Signo Áries'
            paragrafo.innerHTML = "Áries, o primeiro signo do zodíaco, abrange aqueles nascidos entre 21 de março e 19 de abril. Regido por Marte, Áries é um signo de Fogo, conhecido por sua natureza enérgica, corajosa e impulsiva. Os arianos costumam ser líderes natos, com uma forte vontade de explorar e conquistar novos desafios.<br><br>Indivíduos de Áries são conhecidos por sua determinação e entusiasmo, muitas vezes se lançando de cabeça em projetos e ideias. No entanto, essa impulsividade pode levá-los a agir sem pensar, resultando em decisões precipitadas. A paixão e a competitividade são características marcantes.<br><br>Em relacionamentos, Áries é intenso e direto, buscando conexão genuína, mas também precisa de liberdade e espaço para se expressar."
            image.src = 'https://static.vecteezy.com/system/resources/previews/013/382/575/original/aries-zodiac-sign-in-astrological-circle-with-zodiac-constellations-horoscope-blue-and-white-design-vector.jpg'
            break

        case 'touro':
            h1.textContent = 'Signo Touro'
            paragrafo.innerHTML = "Touro, o segundo signo do zodíaco, abrange aqueles nascidos entre 20 de abril e 20 de maio. Regido por Vênus, Touro é um signo de Terra, conhecido por sua natureza prática, paciente e determinada. Os taurinos valorizam estabilidade e conforto, buscando segurança em suas vidas.<br><br>Indivíduos de Touro são persistentes e têm um forte senso de lealdade, mas podem ser teimosos. Eles apreciam a beleza e a estética, frequentemente se destacando em áreas relacionadas à arte e à moda.<br><br>Em relacionamentos, Touro é romântico e confiável, buscando conexões profundas e duradouras."
            image.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/06/16155834/Touro-1024x723.jpg'
            break

        case 'gemeos':
            h1.textContent = 'Signo Gêmeos'
            paragrafo.innerHTML = "Gêmeos, o terceiro signo do zodíaco, abrange aqueles nascidos entre 21 de maio e 20 de junho. Regido por Mercúrio, Gêmeos é um signo de Ar, conhecido por sua natureza curiosa, adaptável e comunicativa. Os geminianos são conhecidos por sua capacidade de se relacionar com diferentes pessoas e por sua mente ágil.<br><br>Indivíduos de Gêmeos são versáteis, mas podem ser indecisos. Eles adoram aprender e explorar novas ideias, tornando-se excelentes conversadores e contadores de histórias.<br><br>Em relacionamentos, Gêmeos é divertido e social, buscando parceiros que estimulem sua mente."
            image.src = 'https://blog.malupires.com.br/wp-content/uploads/2021/03/signo-de-gemeos-simbolo.jpg'

            break

        case 'cancer':
            h1.textContent = 'Signo Câncer'
            paragrafo.innerHTML = "Câncer, o quarto signo do zodíaco, abrange aqueles nascidos entre 21 de junho e 22 de julho. Regido pela Lua, Câncer é um signo de Água, conhecido por sua natureza sensível, protetora e emocional. Os cancerianos são profundamente ligados à família e ao lar.<br><br>Indivíduos de Câncer são altamente empáticos e cuidadores naturais, mas podem se sentir vulneráveis. Eles muitas vezes tomam decisões baseadas em seus sentimentos.<br><br>Em relacionamentos, Câncer é romântico e leal, valorizando conexões profundas."

            image.src = 'https://salamdonya.com/assets/images/26/2680fdvw0.jpg'

            break

        case 'leao':
            h1.textContent = 'Signo Leão'
            paragrafo.innerHTML = "Leão, o quinto signo do zodíaco, abrange aqueles nascidos entre 23 de julho e 22 de agosto. Regido pelo Sol, Leão é um signo de Fogo, conhecido por sua natureza criativa, generosa e dramática. Os leoninos adoram ser o centro das atenções e são naturais líderes.<br><br>Indivíduos de Leão são confiantes e têm um grande coração, mas podem ser autoritários. Eles têm um forte senso de justiça e costumam ser protetores dos que amam.<br><br>Em relacionamentos, Leão é apaixonado e leal, buscando parceiros que reconheçam seu valor."
            image.src = 'https://as2.ftcdn.net/v2/jpg/05/68/43/27/1000_F_568432741_bWBuV3clAQU6myzOva1QrWtGI1BeEUo2.jpg'

            break

        case 'virgem':
            h1.textContent = 'Signo Virgem'
            paragrafo.innerHTML = "Virgem, o sexto signo do zodíaco, abrange aqueles nascidos entre 23 de agosto e 22 de setembro. Regido por Mercúrio, Virgem é um signo de Terra, conhecido por sua natureza prática, detalhista e analítica. Os virginianos são organizados e metódicos, buscando a perfeição em tudo que fazem.<br><br>Indivíduos de Virgem são críticos, tanto de si mesmos quanto dos outros, e têm uma forte ética de trabalho. Eles frequentemente se destacam em áreas que requerem precisão e atenção aos detalhes.<br><br>Em relacionamentos, Virgem é leal, mas pode ser reservado, precisando de tempo para se abrir completamente."
            image.src = 'https://www.horoscopohoy.es/wp-content/uploads/2014/12/virgo211222000.jpg'

            break;

        case 'libra':
            h1.textContent = 'Signo Libra'
            paragrafo.innerHTML = "Libra, o sétimo signo do zodíaco, abrange aqueles nascidos entre 23 de setembro e 22 de outubro. Regido por Vênus, Libra é um signo de Ar, conhecido por sua natureza sociável, equilibrada e diplomática. Os librianos valorizam a harmonia e a estética, buscando sempre a justiça e a igualdade.<br><br>Indivíduos de Libra são charmosos e adoram socializar, mas podem ser indecisos. Eles têm um grande senso estético e muitas vezes se destacam em áreas criativas.<br><br>Em relacionamentos, Libra é romântico e leal, buscando parcerias equilibradas e significativas."
            image.src = 'https://static.vecteezy.com/system/resources/previews/013/930/908/original/libra-zodiac-sign-astrological-horoscope-sign-in-a-mystical-circle-with-moon-sun-and-stars-golden-design-vector.jpg'

            break

        case 'escorpiao':
            h1.textContent = 'Signo Escorpião'
            paragrafo.innerHTML = "Escorpião, o oitavo signo do zodíaco, abrange aqueles nascidos entre 23 de outubro e 21 de novembro. Regido por Plutão, Escorpião é um signo de Água, conhecido por sua natureza intensa, apaixonada e misteriosa. Os escorpianos são profundamente emocionais e têm um forte instinto de sobrevivência.<br><br>Indivíduos de Escorpião são observadores e têm uma grande capacidade de perceber as motivações dos outros. Eles são leais, mas podem ser ciumentos e possessivos.<br><br>Em relacionamentos, Escorpião é intenso e profundo, buscando conexões significativas e autênticas."
            image.src = 'https://quizlandia.club/wp-content/uploads/2020/02/signo-de-escorpi%C3%A3o.jpg'

            break;

        case 'sagitario':
            h1.textContent = 'Signo Sagitário'
            paragrafo.innerHTML = "Sagitário, o nono signo do zodíaco, abrange aqueles nascidos entre 22 de novembro e 21 de dezembro. Regido por Júpiter, Sagitário é um signo de Fogo, conhecido por sua natureza aventureira, otimista e filosófica. Os sagitarianos são exploradores natos, buscando conhecimento e novas experiências.<br><br>Indivíduos de Sagitário são independentes e têm um espírito livre, mas podem ser impacientes. Eles têm um grande senso de humor e uma visão positiva da vida.<br><br>Em relacionamentos, Sagitário é divertido e espontâneo, buscando parceiros que compartilhem sua paixão por aventuras."
            image.src = 'https://www.eusemfronteiras.com.br/wp-content/uploads/2021/01/contactors-2689092_1920-1536x981.jpg'

            break

        case 'capricornio':
            h1.textContent = 'Signo Capricórnio'
            paragrafo.innerHTML = "Capricórnio, o décimo signo do zodíaco, abrange aqueles nascidos entre 22 de dezembro e 19 de janeiro. Regido por Saturno, Capricórnio é um signo de Terra, conhecido por sua natureza ambiciosa, disciplinada e prática. Os capricornianos são trabalhadores dedicados, buscando constantemente alcançar seus objetivos.<br><br>Indivíduos de Capricórnio são realistas e responsáveis, mas podem ser pessimistas. Eles têm um forte senso de dever e frequentemente ocupam posições de liderança.<br><br>Em relacionamentos, Capricórnio é leal e comprometido, valorizando a estabilidade e a segurança."
            image.src = 'https://th.bing.com/th/id/R.d833d070928465623e9d95bd5acb4a15?rik=rNVSwOs51Q%2f1xg&pid=ImgRaw&r=0'

            break

        case 'aquario':
            h1.textContent = 'Signo Aquário'
            paragrafo.innerHTML = "Aquário, o décimo primeiro signo do zodíaco, abrange aqueles nascidos entre 20 de janeiro e 18 de fevereiro. Regido por Urano, Aquário é um signo de Ar, conhecido por sua natureza inovadora, independente e humanitária. Os aquarianos são pensadores originais, sempre em busca de novas ideias e formas de melhorar o mundo.<br><br>Indivíduos de Aquário são excêntricos e possuem uma forte ética social, mas podem ser distantes. Eles valorizam a liberdade e a independência acima de tudo.<br><br>Em relacionamentos, Aquário é divertido e amigável, buscando conexões que estimulem sua mente."
            image.src = 'https://static.vecteezy.com/system/resources/previews/002/094/796/original/aquarius-zodiac-sign-icons-vector.jpg'

            break

        case 'peixes':
            h1.textContent = 'Signo Peixes'
            paragrafo.innerHTML = "Peixes, o último signo do zodíaco, abrange aqueles nascidos entre 19 de fevereiro e 20 de março. Regido por Netuno, Peixes é um signo de Água, conhecido por sua natureza intuitiva, sensível e sonhadora"
            image.src = 'https://th.bing.com/th/id/OIP.3jYMcWDPitoaDyRflUFUugAAAA?rs=1&pid=ImgDetMain'
            break

        

    }
})