function goTo(page) {
    window.location.href = page + '.html';
}

// Função para converter uma data para milissegundos
function dateToMilliseconds(date) {
    return date.getTime();
}

// Função para converter milissegundos para uma data em string
function millisecondsToDateAsString(milliseconds) {
    console.log(milliseconds); 
    console.log('Convertendo ' + milliseconds + ' para dateString');
    if(milliseconds == undefined){
        console.log(`resultado n/a`);
        return 'n/a'
    }

    const convertedDate = new Date(milliseconds);

    const day = convertedDate.getDate();
    const month = convertedDate.getMonth() + 1; // Os meses começam do zero
    const year = convertedDate.getFullYear();
    const hours = convertedDate.getHours();
    const minutes = convertedDate.getMinutes();

    // Adicionando zeros à esquerda se necessário
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Montando a string no formato desejado
    const dateString = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`;
    console.log(`resultado: ${dateString}`);
    return dateString;
}

function dateDifference(date1, date2) {
     const diffInMilliseconds = Math.abs(date2 - date1);
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
    return diffInHours;
}

function getTime(){
    const date = new Date();
    return date.getTime();
}