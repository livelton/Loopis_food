let nomePrato = document.querySelector('#nome-prato');
let precoPrato = document.querySelector('#preco-prato');
let buttonSave = document.querySelector('#button-save');

buttonSave.addEventListener('click', exibir())

function exibir(){
    console.log(nomePrato.value, precoPrato.value)
}

