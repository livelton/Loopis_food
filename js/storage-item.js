import * as productsFunctions from './register-product.js';

let allProducts = []
let registeredItems = [];

export function localStorageItem(name, price) {
   let obj = {
      name: name,
      price: price
   }
   allProducts.push(obj)
   localStorage.products = JSON.stringify(allProducts);
}

export function showStorageItem() {
   if (localStorage.products) {
      registeredItems = JSON.parse(localStorage.getItem('products'));

      registeredItems.forEach((product) => {
         productsFunctions.registerProduct(product.name, product.price)
      });
   } else {
      productsFunctions.showWaring();
   }


}