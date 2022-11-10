import * as sale from './check-sale.js'
import * as remove from './remove-product.js'

export let allProducts = []; //um array com todos os produtos registrados, usarei para criar paginação

//FUNÇÃO PARA MOSTRAR O AVISO DE NÃO PRODUTO CADASTRADO
export function showWaring(){
    let waringNoProduct = document.createElement('h4');
    waringNoProduct.textContent = 'Nenhum produto cadastrado'
    
    let divProduct = document.querySelector('.product-list');
    divProduct.appendChild(waringNoProduct);
    
}

//FUNÇÃO PARA REMOVER AVISO DE NÃO PRODUTO CADASTRADO
export function removeWaring(){
    let waringNoProduct = document.querySelector('h4');
    
    let divProduct = document.querySelector('.product-list');
    divProduct.removeChild(waringNoProduct);
}

export function registerProduct(name, price) {
    let divProduct = document.querySelector('.product-list')
    // allProducts.push(divProduct)
    
    let saleYes = document.querySelector('#sale-yes');
    
    //Criando a classe e o ID do produto
    let product = document.createElement('ul')
    product.setAttribute('class', 'box-product')
    product.setAttribute('id', 'product')
    if(saleYes.checked){
        let firstProduct = divProduct.querySelector("ul");
        divProduct.insertBefore(product, firstProduct)
    } else{
        divProduct.appendChild(product)
    }
    
    if(saleYes.checked){
        //aqui definirá as propriedades do produto
        sale.checkSale(product)

        //aqui definirá o desconto do produto
        price = price - (price * 20/100);
    }

    //Adicionando imagem ao produto
    let img = document.createElement('img')
    img.setAttribute('src', '/imgs/hamburguer.png')
    img.setAttribute('width', '100')
    img.setAttribute('height', '100')
    product.appendChild(img);

    //Adicionando informações do produto
    let infosContentDiv = document.createElement('div')
    infosContentDiv.setAttribute('class', 'infos-content')
    product.appendChild(infosContentDiv)

    let productName = document.createElement('p')
    let productPrice = document.createElement('p')
    productName.textContent = `Nome: ${name}`;
    productPrice.textContent = `Preço: R$${price}`;
    infosContentDiv.appendChild(productName)
    infosContentDiv.appendChild(productPrice)

    //Adicionando botão 
    let divRemove = document.createElement('div')
    divRemove.setAttribute('class', 'button-remove')
    product.appendChild(divRemove)
    let buttonRemove = document.createElement('button')
    divRemove.appendChild(buttonRemove)
    buttonRemove.textContent = 'Remover'

    if(saleYes.checked){
        allProducts = [product, ...allProducts]
    } else{
        allProducts.push(product);
    }

    buttonRemove.addEventListener('click', () => {
        remove.removeProduct(infosContentDiv)
    })
}