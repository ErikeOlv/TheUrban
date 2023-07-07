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