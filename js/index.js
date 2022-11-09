import * as productRegistrate from './register-product.js';

let dishName = document.querySelector('#name-dish');
let dishPrice = document.querySelector('#price-dish');
let saveButton = document.querySelector('#button-save');

productRegistrate.showWaring()

saveButton.addEventListener('click', () => {
    productRegistrate.registerProduct(dishName.value, dishPrice.value);
    productRegistrate.removeWaring();
});