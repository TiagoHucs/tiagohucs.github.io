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


}

