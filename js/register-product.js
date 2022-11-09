export let allProducts = []; //um array com todos os produtos registrados, usarei para criar paginação

export function registerProduct(name, price){
    let divProduct = document.querySelector('.product-list')
    allProducts.push(divProduct)

    //Criando a classe e o ID do produto
    let product = document.createElement('ul')
    product.setAttribute('class', 'box-product')
    product.setAttribute('id', 'product')
    console.log(product)
    divProduct.appendChild(product)

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
    console.log(infosContentDiv)

    //Adicionando botão 
    let divRemove = document.createElement('div')
    divRemove.setAttribute('class', 'button-remove')
    product.appendChild(divRemove)
    let buttonRemove = document.createElement('button')
    divRemove.appendChild(buttonRemove)
    buttonRemove.textContent = 'Remover'
}