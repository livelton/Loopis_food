import * as storage from './storage-item.js'

export function comparateWaring() {
    let toWaring = storage.recoverLocalStorage();

    const waring = document.querySelector('h4')
    const existsWaring = document.body.contains(waring)


    if (toWaring.length === 0){
        showWaring()
    }
    else if (existsWaring == true) {
        removeWaring()
        console.log('remove')
    }
}

//FUNÇÃO PARA MOSTRAR O AVISO DE NÃO PRODUTO CADASTRADO
function showWaring() {
    let waringNoProduct = document.createElement('h4');
    waringNoProduct.textContent = 'Nenhum produto cadastrado'

    let divProduct = document.querySelector('.product-list');
    divProduct.appendChild(waringNoProduct);

}

//FUNÇÃO PARA REMOVER AVISO DE NÃO PRODUTO CADASTRADO
function removeWaring() {
    let waringNoProduct = document.querySelector('h4');

    let divProduct = document.querySelector('.product-list');
    divProduct.removeChild(waringNoProduct);
}

export function registerProduct(name, price) {
    let saleYes = document.querySelector('#sale-yes');
    storage.localStorageItem(name, price, saleYes.checked);

    updateProduct();
    comparateWaring();
}

export function updateProduct() {
    let pullStorage = storage.recoverLocalStorage();

    let itemsHTML = pullStorage.map((element, index) => {

        //Criando a classe e o ID do produto
        let product = document.createElement('ul')
        product.setAttribute('class', 'box-product')
        product.setAttribute('id', 'product')

        console.log()
        if (element.sale) {
            product.style.backgroundColor = "#E4B056";
            //aqui definirá as propriedades do produto
            //sale.checkSale(product)
        }

        //Adicionando imagem ao produto
        let img = document.createElement('img')
        img.setAttribute('src', '/imgs/hamburguer.png')
        img.setAttribute('width', '100')
        img.setAttribute('height', '100')

        //Adicionando informações do produto
        let infosContentDiv = document.createElement('div')
        infosContentDiv.setAttribute('class', 'infos-content')


        let productName = document.createElement('p')
        let productPrice = document.createElement('p')
        productName.textContent = `Nome: ${element.name}`;
        productPrice.textContent = `Preço: R$${element.price}`;


        //Adicionando botão 
        let divRemove = document.createElement('div')
        divRemove.setAttribute('class', 'button-remove')

        let buttonRemove = document.createElement('button')
        buttonRemove.textContent = 'Remover'

        buttonRemove.addEventListener('click', () => {
            storage.removeProduct(index)
            updateProduct();
            comparateWaring();
        })

        divRemove.appendChild(buttonRemove)
        infosContentDiv.appendChild(productName)
        infosContentDiv.appendChild(productPrice)
        product.appendChild(img);
        product.appendChild(infosContentDiv)
        product.appendChild(divRemove)


        return product;
    })

    const divProduct = document.querySelector('.product-list')
    divProduct.replaceChildren(...itemsHTML);
}
