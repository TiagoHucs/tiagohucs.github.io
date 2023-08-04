class Util {

    static redirectHome(){
        window.location.href = 'index.html'
    }

    static convertReal(valorFloat){
        return valorFloat.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
    }

    static download(){

        const materialRepository = new Repository('materiais');
        const produtoRepository = new Repository('produtos');
        const conteudoArquivo = JSON.stringify(materialRepository.findAll());
        // Exemplo de conteúdo para o arquivo
        //const conteudoArquivo = 'Este é o conteúdo do arquivo que será baixado!';
  
        // Criar um Blob com o conteúdo do arquivo
        const blob = new Blob([conteudoArquivo], { type: 'text/plain' });
  
        // Criar um URL temporário para o Blob
        const url = URL.createObjectURL(blob);
  
        // Criar um link de download
        const linkDownload = document.createElement('a');
        linkDownload.href = url;
        linkDownload.download = 'materiais.json';
        linkDownload.style.display = 'none';
  
        // Adicionar o link à página
        document.body.appendChild(linkDownload);
  
        // Simular o clique no link para fazer o download
        linkDownload.click();
  
        // Limpar o URL temporário criado
        URL.revokeObjectURL(url);

    
    }


}

