this.objectName = 'medication-data';

function findAll(){
    const data = localStorage.getItem(this.objectName);
    if (data) {
        return JSON.parse(data);
    }
    return [];
};

function save(object){
    let array = this.findAll();

    const id = this.generateUniqueId();
    const objectWithId = {
        id,
        ...object
    };

    array.push(objectWithId);
    localStorage.setItem(this.objectName, JSON.stringify(array));

    alert('Novo item salvo ' + objectWithId.id)
};

function update(object){
    let array = this.findAll();
    const newArray = array.map(item => item.id === object.id ? object : item);
    localStorage.setItem(this.objectName, JSON.stringify(newArray));
};

function exclude(idProcurado) {
    const array = this.findAll();
    const newArray = array.filter(objeto => objeto.id != idProcurado);
    const objectToExclude = array.filter(objeto => objeto.id == idProcurado);
    localStorage.setItem(this.objectName, JSON.stringify(newArray));
};

function findOne(idProcurado) {
    const array = this.findAll();
    return array.find(objeto => objeto.id === Number(idProcurado));
};

function generateUniqueId() {
    return Date.now();
}