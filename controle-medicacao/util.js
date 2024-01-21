function goTo(page) {
    window.location.href = page + '.html';
}

function dateToStr(data) {
    // Verifica se 'data' é uma instância válida de Date
    if (data == undefined) {
        return 'sem registro da ultima dose';
    }
    // Obtém a data atual
    var dataAtual = new Date(data);

    // Obtém os componentes da data
    var dia = adicionaZero(dataAtual.getDate());
    var mes = adicionaZero(dataAtual.getMonth() + 1); // Os meses são baseados em zero
    var ano = dataAtual.getFullYear();
    var horas = adicionaZero(dataAtual.getHours());
    var minutos = adicionaZero(dataAtual.getMinutes());
    var segundos = adicionaZero(dataAtual.getSeconds());

    // Formata a data no formato desejado
    var dataFormatada = dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos + ':' + segundos;

    // Exibe a data formatada
    return dataFormatada;
}

// Função para adicionar um zero à esquerda, se necessário
function adicionaZero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Função para calcular a diferença de tempo entre duas datas
function diff(dataInicio, dataFim) {
    // Garante que ambas as datas são instâncias válidas de Date
    if (isNaN(dataInicio) || isNaN(dataFim)) {
        console.log(dataInicio)
        console.log(dataFim)
        return 'Datas inválidas';
    }

    // Calcula a diferença em milissegundos
    var diferencaEmMilissegundos = dataFim - dataInicio;

    // Calcula a diferença em segundos, minutos, horas, dias, etc.
    var diferencaEmSegundos = diferencaEmMilissegundos / 1000;
    var diferencaEmMinutos = diferencaEmSegundos / 60;
    var diferencaEmHoras = diferencaEmMinutos / 60;
    var diferencaEmDias = diferencaEmHoras / 24;

    return {
        milissegundos: diferencaEmMilissegundos,
        segundos: diferencaEmSegundos,
        minutos: diferencaEmMinutos,
        horas: diferencaEmHoras,
        dias: diferencaEmDias
    };
}

