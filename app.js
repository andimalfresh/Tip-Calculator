
var buttonPush = document.querySelector('.btn')
var grabTotal = document.querySelector('.total')

buttonPush.addEventListener('click', function (event) {
    event.preventDefault()
    var message = 'Your Total for today is: $'
    var mealCost = parseInt(document.querySelector('.total').value)
    var mealPlusTip = mealCost + (mealCost * .2)
    mealPlusTip = mealPlusTip.toFixed(2)
    document.querySelector('.return').innerText += message + mealPlusTip
})

