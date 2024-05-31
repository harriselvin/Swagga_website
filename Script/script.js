let femalePrice = document.querySelector('[data-female-price]')
let malePrice = document.querySelector('[data-male-price]')

let femaleInput = document.querySelector('[data-female-input]')
let maleInput = document.querySelector('[data-male-input]')

let femaleTotal = document.querySelector('[data-female-total]')
let maleTotal = document.querySelector('[data-male-total]')

let calcButton = document.querySelectorAll('button')[1]
let clear = document.querySelector('button')
let overAllTotal = document.querySelector('[data-overall-total]')

function calcFemale() {
  let calculation = parseFloat(femalePrice.innerText) * parseFloat(femaleInput.value)
  
  if (!isNaN(calculation)) {
    femaleTotal.innerText = calculation.toFixed(2)
  } else {
    femaleTotal.innerText = "0.00"
  }
}

function calcMale() {
  let calculation = parseFloat(malePrice.innerText) * parseFloat(maleInput.value)

  if (!isNaN(calculation)) {
    maleTotal.innerText = calculation.toFixed(2)
  } else {
    maleTotal.innerText = "0.00"
  }
}

function calcOverallTotal() {
  let femaleTotalVal = parseFloat(femaleTotal.innerText)
  let maleTotalVal = parseFloat(maleTotal.innerText)

  if (!isNaN(femaleTotalVal) || !isNaN(maleTotalVal)) {
    overAllTotal.innerText = (femaleTotalVal + maleTotalVal).toFixed(2)
  } else {
    overAllTotal.innerText = "0.00"
  }
}

function clearVal() {
  femaleTotal.innerText = "0.00"
  maleTotal.innerText = "0.00"
  overAllTotal.innerText = "0.00"
  femaleInput.value = ""
  maleInput.value = ""
}

femaleInput.addEventListener('input', calcFemale)
maleInput.addEventListener('input', calcMale)
calcButton.addEventListener('click', calcOverallTotal)
clear.addEventListener('click', clearVal)