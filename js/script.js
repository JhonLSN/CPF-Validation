const cpf = document.querySelector('.main__wrapper__validation__box-cpf');
const button = document.querySelector('.main__wrapper__validation__btn')

button.addEventListener('click', () =>{
    alert(cpf.value)
});

$(document).ready(() =>{
    $(cpf).mask("000.000.000-00")
});

console.log(cpf.value)