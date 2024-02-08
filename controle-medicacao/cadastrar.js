function saveMedication(){
    const name = document.getElementById('medication-name').value;
    const intervalHours = document.getElementById('medication-time').value;
    let medication = {name:name,intervalHours:intervalHours};
    save(medication);
    window.location.href = 'index.html';
}