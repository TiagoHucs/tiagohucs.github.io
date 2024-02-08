function loadList() {
    console.log('carregando lista');
    var medicationList = findAll();
    letHtmlStr = '';

    console.log('Carregando medicação: ')
    if(medicationList.length > 0){
     
        medicationList.forEach(medication => {
            console.log(medication)
            letHtmlStr += 
            `<div class="card bg-${getNeedToTake(medication) ? 'warning' : 'success'} text-white" onclick="takePill('${medication.id}')">
                <div class="card-body">${medication.name}<br>
                <i>Última dose: ${millisecondsToDateAsString(medication.takeDate)}</i>
                </div>
            </div>`;
        });
    } else {
        letHtmlStr = '<span id="list-view"><i>Sem remédios cadastrados</i></span>'
    }

    //atualiza a lista na tela
    document.getElementById('list-view').innerHTML = letHtmlStr;
    
    //data hora no cabeçalho
    document.getElementById('data-hora').innerHTML = `<span id="data-hora"><i>${millisecondsToDateAsString(new Date())}</i></span>`

}

function takePill(id) {
    if (confirm('Confirma que tomou ' + id + '?') == true) {
        let medication = findOne(id);
        medication.takeDate = getTime();
        update(medication);
        this.loadList();
    }
}

function getNeedToTake(medication){
    console.log('Precisa tomar: '+ medication.name + '?');
    console.log(medication);

    if(medication.takeDate == undefined){
        return true;
    }

    const diffInHours = dateDifference(medication.takeDate, getTime());
    console.log(diffInHours);
    
    if(diffInHours > medication.intervalHours){
        return true;
    }
    return false;
}