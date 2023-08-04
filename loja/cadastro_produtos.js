const FORM_NAME = 'produtoForm'; 
const ITEM_LIST = 'produtoList';
const OBJECT_NAME = 'produtos';

function init(){
    repo = new Repository(OBJECT_NAME);    
}

function save(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const produto = {
        nome
    };

    cleanForm();
    repo.save(produto);
    loadList();
}

function download(){
    const arrayData = repo.findAll();
    Util.download(OBJECT_NAME, arrayData);
}

function remove(id) {
    const item = repo.findOne(id);
    const response = confirmation(`Você tem certeza que deseja excluir o produto ${item.nome}?`);
    if(response){
        repo.delete(id);
        loadList();
    }
}

function link(id) {
    const url = `editar_produto.html?id=${id}`;
    window.location.href = url;
}

function loadList() {
    const arrayData = repo.findAll();
    if (arrayData.length > 0) {
      const itemList = document.getElementById(ITEM_LIST);
      itemList.innerHTML = '';
      arrayData.forEach((produto) => {
        const newRow = itemList.insertRow();
        newRow.innerHTML = `
          <td>${produto.nome}</td>
          <td>
          <div class="btn btn-sm btn-dark" onclick="link(${produto.id})">Editar items</div>
          <div class="btn btn-sm btn-dark" onclick="remove(${produto.id})">Excluir</div>
          </td>
        `;
      });
    }
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