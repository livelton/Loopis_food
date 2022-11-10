import * as productsFunctions from './register-product.js';


let dishName = document.querySelector('#name-dish');
let dishPrice = document.querySelector('#price-dish');
let saveButton = document.querySelector('#button-save');


let cont = 0;

productsFunctions.showWaring()

saveButton.addEventListener('click', () => {
    //O aviso será removido somente no primeiro clique do botão
    cont++
    if (cont === 1) {
        productsFunctions.removeWaring();
    }

    //Serão passados os valores digitados para o usuário para a função de registrar produto
    productsFunctions.registerProduct(dishName.value, dishPrice.value);
});