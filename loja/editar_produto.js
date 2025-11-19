
function init() {
    materialRepository = new Repository('materiais');
    produtoRepository = new Repository('produtos');

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    produto = produtoRepository.findOne(id)
    document.getElementById('title').innerText = 'Produto: ' + produto.nome;
    materiais = materialRepository.findAll();

}

function loadOptionList() {
    console.log(materiais);
    if (materiais.length > 0) {
        const itemList = document.getElementById('materiaisSelect');
          materiais.forEach((material) => {
            itemList.innerHTML += `
          <option value="${material.id}">${material.nome}</option>
        `;
        });
    }
}

function loadItemList() {
    const items = produto.materiais || [];
    let custo = 0;
    if (items.length > 0) {
        const itemList = document.getElementById('itemList');
        itemList.innerHTML = '';
        items.forEach((item) => {

            const precoCusto = Number(item.material.precoCusto) / item.quantidade;

          itemList.innerHTML += `
          <td>${item.material.nome}</td>
          <td>${item.quantidade} ${item.material.unidadeMedida}</td>
          <td>${Util.convertReal(item.quantidade * item.material.precoCusto)}</td>
          <td><div class="btn btn-sm btn-dark" onclick="removeMaterial(${item.id})">Excluir</div></td>
        `;
            custo += item.quantidade * item.material.precoCusto;
        });
    }

    document.getElementById('custo').innerText = Util.convertReal(custo);
}

function removeMaterial(idProcurado){
   
    const newArray = produto.materiais.filter(objeto => objeto.id !== idProcurado);

    produto.materiais = newArray;
    produtoRepository.update(produto);
    loadItemList();
}

function selecionarOpcao() {
    //selecionando material
    const selectElement = document.getElementById('materiaisSelect');
    const selectedValue = selectElement.value;
    const materialEscohido = materialRepository.findOne(selectedValue)

    //setando unidade de medida
    showMedida.value = materialEscohido.unidadeMedida;

    setConversorTitles(materialEscohido.unidadeMedida);

}

function setConversorTitles(unidadeMedida) {
    
    if ('Kilo' == unidadeMedida){
        document.getElementById('gramInputLabel').innerText = 'Gramas';
        document.getElementById('kiloInputLabel').innerText = 'Quilogramas';
        document.getElementById("conversorUnidade").hidden = false;
    } else if ('Litro' == unidadeMedida){
        document.getElementById('gramInputLabel').innerText = 'Mililitros (Ml)';
        document.getElementById('kiloInputLabel').innerText = 'Litros';
        document.getElementById("conversorUnidade").hidden = false;
    } else {
        document.getElementById("conversorUnidade").hidden = true;
    }
}

function addMaterial(){
   
    //selecionando material
    const selectElement = document.getElementById('materiaisSelect');
    const selectedValue = selectElement.value;
    const material = materialRepository.findOne(selectedValue);
    const quantidade = document.getElementById('quantidade').value;

    if(Number(quantidade) <= 0){
        alert('Quantidade é obrigatória')
        return
    }

    const id = Date.now();
    const item = {
        id,
        material,
        quantidade
    }

    const materiaisDoProduto = produto.materiais || [];
    materiaisDoProduto.push(item);
    produto.materiais = materiaisDoProduto;
    produtoRepository.update(produto);
    loadItemList();
}

//ao terminar de carregar a pagina
window.addEventListener('DOMContentLoaded', () => {
    init();
    loadOptionList();
    loadItemList();
    selecionarOpcao();
});