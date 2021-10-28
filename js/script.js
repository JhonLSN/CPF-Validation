const validation = document.querySelector('.main__wrapper__validation__box');
const cpf = document.querySelector('.main__wrapper__validation__box-cpf');
const button = document.querySelector('.main__wrapper__validation__btn')
const paragraph = document.createElement('p')

// Create Tag Paragraph
paragraph.classList.add('main__wrapper__validation__paragraph')
validation.appendChild(paragraph)

// Function of click 
button.addEventListener('click', () => {
    requiredField(),
    formatCPF()
});


// Formater CPF Number
$(document).ready(() => {
    $(cpf).mask("000.000.000-00")
});

function requiredField(){
    if(cpf.innerHTML === ''){
        paragraph.innerHTML = 'Preencha o campo'
        return
    }
}

function formatCPF(){
    if (cpf.value.length != 14) {
        
        paragraph.innerHTML = 'Insira um formato CPF';
        return
    }
}