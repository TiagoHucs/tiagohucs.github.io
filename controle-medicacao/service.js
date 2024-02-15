function saveMedication(){
    const name = document.getElementById('medication-name').value;
    const intervalHours = document.getElementById('medication-time').value;
    let medication = {name:name,intervalHours:intervalHours};
    save(medication);
    window.location.href = 'index.html';
}

function loadList() {
    var medicationList = findAll();
    console.log(medicationList);
    letHtmlStr = '';

    if(medicationList.length > 0){
     
        medicationList.forEach(medication => {
            letHtmlStr += 
            `<div class="card bg-${getNeedToTake(medication) ? 'warning' : 'success'} text-white">
                <div class="card-body">
                <b>Nome: ${medication.name}</b><br>
                A cada ${medication.intervalHours} horas<br>
                <i>Última dose: ${millisecondsToDateAsString(medication.takeDate)}</i><br>
                <i>Próxima dose: ${millisecondsToDateAsString(medication.nextTakeDate)}</i>
                </div>
                <div class="card-footer">
                    <div class="btn btn-danger float-end" onclick="deletePill('${medication.id}')">Excluir</div>
                    <div class="btn btn-primary float-end" onclick="takePill('${medication.id}')">Tomar</div>
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
        medication.nextTakeDate = getTimeWithAddHours(medication.takeDate,medication.intervalHours);
        update(medication);
        this.loadList();
    }
}

function deletePill(id) {
    const medication = findOne(id) 
    if (confirm('Confirma a exclusão de ' + medication.name + '?') == true) {
       this.exclude(id);
    }
    this.loadList();
}

function getNeedToTake(medication){
    if(medication.takeDate == undefined){
        return true;
    }

    const diffInHours = dateDifference(medication.takeDate, getTime());
    
    if(diffInHours > medication.intervalHours){
        return true;
    }
    return false;
}

function getNextTake(medication){

    if(medication.takeDate == undefined){
        return getTime();
    }
    
    const diffInHours = dateDifference(medication.takeDate, getTime());
    return diffInHours;
}