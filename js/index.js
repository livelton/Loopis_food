import * as productsFunctions from './register-product.js';

window.addEventListener('load', productsFunctions.updateProduct());
productsFunctions.comparateWaring();

let saveButton = document.querySelector('#button-save');
let dishName = document.querySelector('#name-dish');
let dishPrice = document.querySelector('#price-dish');

saveButton.addEventListener('click', () => {

    //Condição que não irá permitir o usuário cadastrar produtos com nome e preço vazio
    if (dishName.value === '' || dishPrice.value === '') {
        window.alert('Por favor, digite as informações do produto!')

    } else {
        //Serão passados os valores digitados para o usuário para a função de registrar produto
        productsFunctions.registerProduct(dishName.value, dishPrice.value);
    }



});