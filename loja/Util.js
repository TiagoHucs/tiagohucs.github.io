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

    static backup(conteudoArquivoM){
        // Criar um Blob com o conteúdo do arquivo
        const blob = new Blob([JSON.stringify(conteudoArquivoM)], { type: 'text/plain' });
  
        // Criar um URL temporário para o Blob
        const url = URL.createObjectURL(blob);
  
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

    static ordenar(array){

        function compararPorNome(a, b) {
            return a.nome.localeCompare(b.nome);
        }

        array.sort(compararPorNome);
        return array;
    }


}

