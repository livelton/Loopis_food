if (localStorage.products === undefined) {
   localStorage.products = JSON.stringify([]);
}else{
   localStorage.products = localStorage.getItem('products')
}

export function localStorageItem(name, price, sale) {
   let allProducts = JSON.parse(localStorage.products)
   let obj = {
      name: name,
      price: price,
      sale: sale
   }

   if (sale) {
      //aqui definirá o desconto do produto
      obj.price = (obj.price - (obj.price * 20 / 100)).toFixed(2);
      allProducts.unshift(obj)
   } else {
      allProducts.push(obj)
   }

   localStorage.products = JSON.stringify(allProducts);
}

export function recoverLocalStorage() {
   return JSON.parse(localStorage.products)
}

export function removeProduct(index){
   let allProducts = JSON.parse(localStorage.products);
   
   allProducts.splice(index, 1);
   localStorage.products = JSON.stringify(allProducts);
}