

for (var i = 0; i < 99; i++) {
    console.log('^ _ ^')
}

var buttonPush = document.querySelector('.btn')
var grabTotal = document.querySelector('.total')


buttonPush.addEventListener('click', function (event) {
    event.preventDefault()
    var mealCost = document.querySelector('.total').value
    var mealPlusTip = mealCost + (mealCost * .2)
    document.querySelector('.return').innerText += mealPlusTip
})











// var costInput = document.querySelector('.total').value
// var buttonPress = document.querySelector('.btn')
// buttonPress.addEventListener('click', function (event) {
//     document.appendChild('paragrap')
// })
