// Seleciona todos os elementos H2 no documento
const titulos = document.querySelectorAll('h2');

    // Define as cores do degradê
    const cores = ['#de3161', '#ff7f50', '#ffa500'];

    // Variável para rastrear o índice da cor atual
    let index = 0;

    // Função para trocar a cor dos elementos H2
    function trocarCor() {
    // Percorre cada elemento H2
    titulos.forEach((titulo) => {
    // Aplica a cor correspondente do array 'cores'
    titulo.style.color = cores[index];
    });

    // Atualiza o índice para a próxima cor no array
    index = (index + 1) % cores.length;
    }

    // Chama a função 'trocarCor' repetidamente em intervalos de tempo definidos
    setInterval(trocarCor, 1000);

// Selecionar todos os elementos <video>
var videos = document.querySelectorAll('video');

    // Iterar sobre cada vídeo e adicionar os ouvintes de eventos
    videos.forEach(function(video) {
    // Evento com o mouse
    video.addEventListener('mouseenter', function() {
        video.play();
    });

    // Reinício quando o mouse sair
    video.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0;
    });
    });

//Obtem os artigos
function toggleArticles() {
    var articles = document.getElementsByClassName("article");

    //obtem o valor do checkbox
    var showMoreCheckbox = document.getElementById("artigo-checkbox");

    //obtem o conteúdo do artigo
    var showMoreLabel = document.getElementById("artigo-button");
  
    // Alterna a classe "hidden" nos artigos (exceto o primeiro)
    for (var i = 1; i < articles.length; i++) {
        articles[i].classList.toggle("hidden");
    }
  
    // Altera o texto da label com base no estado do checkbox
    if (showMoreCheckbox.checked) {
        showMoreLabel.textContent = "Ver mais notícias";
    } else {
        showMoreLabel.textContent = "Ver menos notícias";
    }
    }

window.addEventListener('scroll', function() {
    // Obtém o elemento do menu pelo ID
    var menu = document.getElementById('menu'); 
    // Obtém a posição de rolagem vertical da página
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
      
    if (scrollTop > 0) {
        // Remove a classe .transparent do menu
        menu.classList.remove('transparent'); 
        // Adiciona a classe .normal ao menu
        menu.classList.add('normal'); 
    } else {
        // Remove a classe .normal do menu
        menu.classList.remove('normal'); 
        // Adiciona a classe .transparent ao menu
        menu.classList.add('transparent'); 
        }
      });