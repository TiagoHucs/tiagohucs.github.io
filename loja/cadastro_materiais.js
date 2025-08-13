const FORM_NAME = 'materiaisForm'; 
const ITEM_LIST = 'materiaisList';
const OBJECT_NAME = 'materiais';

function init(){
    repo = new Repository(OBJECT_NAME);    
}

function save(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const precoCusto = document.getElementById('preco_custo').value;
    const unidadeMedida = document.getElementById('unidade_medida').value;

    const material = {
        nome,
        precoCusto,
        unidadeMedida
    };

    cleanForm();
    repo.save(material);
    loadList();
}

function remove(id) {
    const item = repo.findOne(id);
    const response = confirmation(`Você tem certeza que deseja excluir o ${OBJECT_NAME} ${item.nome}?`);
    if(response){
        repo.delete(id);
        loadList();
    }
}

function loadList() {
    const arrayData = repo.findAll();
    if (arrayData.length > 0) {
      const itemList = document.getElementById(ITEM_LIST);
      itemList.innerHTML = '';
      arrayData.forEach((material) => {
        const newRow = itemList.insertRow();
        newRow.innerHTML = `
          <td>${material.nome}</td>
          <td>R$ ${material.precoCusto}</td>
          <td>${material.unidadeMedida}</td>
          <td><div class="btn btn-sm btn-dark" onclick="remove(${material.id})">Excluir</div></td>
        `;
      });
    }
  }

  function download(){
    const arrayData = repo.findAll();
    Util.download(OBJECT_NAME , arrayData);
}

function confirmation(text) {
    const response = window.confirm(text);
    return response;
}

function cleanForm() {
    document.getElementById(FORM_NAME).reset();
}

const form = document.getElementById(FORM_NAME);
form.addEventListener('submit', save);

//ao terminar de carregar a pagina
window.addEventListener('DOMContentLoaded', () => {
    init();
    loadList();
});