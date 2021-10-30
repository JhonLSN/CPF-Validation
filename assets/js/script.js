const validation = document.querySelector('.main__wrapper__validation__box');
const cpf = document.querySelector('.main__wrapper__validation__box-cpf');
const button = document.querySelector('.main__wrapper__validation__btn')
const paragraph = document.createElement('p')

// Create Tag Paragraph
paragraph.classList.add('main__wrapper__validation__paragraph')
validation.appendChild(paragraph)

// Function of click 
button.addEventListener('click', () => {
  // Required Field
  if (cpf.value === '') {
    paragraph.innerHTML = 'Preencha o campo'
    paragraph.style.color = 'red'
    return
  }
 
  // Format CPF
  if (cpf.value.length != 14) {

    paragraph.innerHTML = 'Insira um formato CPF';
    paragraph.style.color = 'red'
    return
  }

  // Array of CPF
  let cpfArray = cpf.value.split('')

  // First Calc
  let firstDigit = cpfArray[0] * 10
  let secondDigit = cpfArray[1] * 9
  let thirdDigit = cpfArray[2] * 8
  let fourthDigit = cpfArray[4] * 7
  let fifthDigit = cpfArray[5] * 6
  let sixthDigit = cpfArray[6] * 5
  let seventhDigit = cpfArray[8] * 4
  let eighthDigit = cpfArray[9] * 3
  let ninthDigit = cpfArray[10] * 2
  let eleventhDigit = 0
  let twelfthDigit = 0

  // Calculating Values Again 
  let eleventhDigitCalc = firstDigit + secondDigit + thirdDigit + fourthDigit + fifthDigit + sixthDigit + seventhDigit + eighthDigit + ninthDigit

  if (eleventhDigitCalc % 11 < 2) {
    eleventhDigit = 0
  } else {
    eleventhDigit = 11 - (eleventhDigitCalc % 11)
  }

  // Second Calc
  let firstDigitII = cpfArray[0] * 11
  let secondDigitII = cpfArray[1] * 10
  let thirdDigitII = cpfArray[2] * 9
  let fourthDigitII = cpfArray[4] * 8
  let fifthDigitII = cpfArray[5] * 7
  let sixthDigitII = cpfArray[6] * 6
  let seventhDigitII = cpfArray[8] * 5
  let eighthDigitII = cpfArray[9] * 4
  let ninthDigitII = cpfArray[10] * 3
  let eleventhDigitII = eleventhDigit * 2

  // Calculating Values Again
  let = eleventhDigitCalcII = firstDigitII + secondDigitII + thirdDigitII + fourthDigitII + fifthDigitII + sixthDigitII + seventhDigitII + eighthDigitII + ninthDigitII + eleventhDigitII

  if (eleventhDigitCalcII % 11 < 2) {
    twelfthDigit = 0
  } else {
    twelfthDigit = 11 - (eleventhDigitCalcII % 11)
  }

  if (cpf.value.split('')[12] === eleventhDigit.toString() && cpf.value.split('')[13] === twelfthDigit.toString()) {
    paragraph.innerHTML = 'Esse é um CPF válido'
    paragraph.style.color = 'green'
  } else {
    paragraph.innerHTML = 'CPF inválido'
    paragraph.style.color = 'red'
  }
});


// Formater CPF Number
$(document).ready(() => {
  $(cpf).mask("000.000.000-00")
});

