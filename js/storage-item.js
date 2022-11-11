let savedItems = [];

export function localStorageItem(product) {
   savedItems.push(product)
   localStorage.setItem('products', JSON.stringify(savedItems))
   JSON.parse(localStorage.products)
}

export function showStorageItem(){
   localStorage.getItem('products');
   let storageItems = JSON.parse(localStorage.products)

   
}