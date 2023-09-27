function executar() {
    const password = document.getElementById('password').value;
    const site = document.getElementById('site').value;
    const qtdChars = document.getElementById('qtdChars');
    const needSpecialChars = document.getElementById('needSpecialChars');
    const generatedPassword = misturarStrings(password, site);
    
    document.getElementById('generatedPassword').value = generatedPassword;
}

function misturarStrings(string1, string2) {
    const specialChars = ['@','#','$','%','^'];
    const array1 = string1.split(''); // Divide a primeira string em um array de caracteres
    const array2 = string2.split(''); // Divide a segunda string em um array de caracteres
    const resultado = [];

    // Loop para alternar as letras das duas strings
    while (array1.length > 0 || array2.length > 0) {
        if (array1.length > 0) {
            resultado.push(array1.shift());
        }
        if (array2.length > 0) {
            resultado.push(array2.shift());
        }
        if(needSpecialChars.checked && specialChars.length > 0){
            resultado.push(specialChars.shift());
        }
        
    }

    let finalResult = resultado.join('');

    if(qtdChars.value !== null && qtdChars.value !== ''){
        finalResult = finalResult.substring(0,qtdChars.value)
    }
    
    return finalResult
}
