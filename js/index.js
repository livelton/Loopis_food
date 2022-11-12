import * as productsFunctions from './register-product.js';

window.addEventListener('load', productsFunctions.updateProduct());


let saveButton = document.querySelector('#button-save');


saveButton.addEventListener('click', () => {

    //Condição que não irá permitir o usuário cadastrar produtos com nome e preço vazio
    // if (dishName.value === '' || dishPrice.value === '') {
    //     window.alert('Por favor, digite as informações do produto!')
    //     console.log('Filtrou: ' + dishName.value, dishPrice.value)

    // } else {
        //Serão passados os valores digitados para o usuário para a função de registrar produto
        productsFunctions.registerProduct();

    

});