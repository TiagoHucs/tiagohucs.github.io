function executar() {
    const password = document.getElementById('password').value;
    const site = document.getElementById('site').value;
    const qtdChars = document.getElementById('qtdChars');
    const needSpecialChars = document.getElementById('needSpecialChars');

    hashPassword(password + site)
        .then(hash => {
            const result = hash; //falta limitar e colocar caracteres  
            document.getElementById('generatedPassword').value = result;
        })
    .catch(error => {
        console.error('Erro ao gerar o hash:', error);
    });

}

function limitar(qtd, pass){
    if(qtd != null && qtd != undefined){
        return pass.substring(0,5);
    } else{  
        return pass;
    }
}
