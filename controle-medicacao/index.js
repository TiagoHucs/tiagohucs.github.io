
var medicationList = [{ name: 'doril', took: true }, { name: 'diasepan', took: false }];

function loadList() {
    console.log('carregando lista');
    var medicationList = findAll();
    letHtmlStr = '';

    if(medicationList.length > 0){
        medicationList.forEach(medication => {
            letHtmlStr += 
            `<div class="card bg-${getNeedToTake(medication) ? 'warning' : 'success'} text-white" onclick="takePill('${medication.id}')">
                <div class="card-body">${medication.name}<br>
                <i>${dateToStr(medication.tookDate)}</i>
                </div>
            </div>`;
        });
    } else {
        letHtmlStr = '<span id="list-view"><i>Sem remédios cadastrados</i></span>'
    }
    document.getElementById('list-view').innerHTML = letHtmlStr;

    document.getElementById('data-hora').innerHTML = `<span id="data-hora"><i>${dateToStr(new Date())}</i></span>`

}

function takePill(id) {
    let text;
    if (confirm('Confirma que tomou ' + id + '?') == true) {
        let medication = findOne(id);
        medication.took = true;
        medication.tookDate = new Date();
        update(medication);
        this.loadList();
    }
}

function getNeedToTake(medication){
    console.log('vamos calcular o tempo de '+ medication.name);
    const diferencaDeTempo = diff(new Date(medication.tookDate), new Date());
    console.log(diferencaDeTempo.minutos);
    
    if(diferencaDeTempo.minutos > 1){
        return true;
    }

    return false;
}