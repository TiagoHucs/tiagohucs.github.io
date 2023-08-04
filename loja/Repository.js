class Repository {

    constructor(objectName){
        this.objectName = objectName;
    }

    findAll(){
        const data = localStorage.getItem(this.objectName);
        if (data) {
            return Util.ordenar(JSON.parse(data));
        }
        return [];
    };

    save(object){
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

    update(object){
        let array = this.findAll();
        const newArray = array.map(item => item.id === object.id ? object : item);
        localStorage.setItem(this.objectName, JSON.stringify(newArray));
    };

    delete(idProcurado) {
        const array = this.findAll();
        const newArray = array.filter(objeto => objeto.id !== idProcurado);
        localStorage.setItem(this.objectName, JSON.stringify(newArray));

    };

    findOne(idProcurado) {
        const array = this.findAll();
        return array.find(objeto => objeto.id === Number(idProcurado));        
    };

    generateUniqueId() {
        return Date.now();
    }

}