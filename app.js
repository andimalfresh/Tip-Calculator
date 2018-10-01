
var buttonPush = document.querySelector('.btn')
var grabTotal = document.querySelector('.total')
var message = 'The amount you should tip is: $'


buttonPush.addEventListener('click', function (event) {
    event.preventDefault()
    var pullTotal = parseInt(document.querySelector('.total').value)
    var tipAmount = (pullTotal * .2).toFixed(2)
    document.querySelector('.return').innerText += message + tipAmount
})

