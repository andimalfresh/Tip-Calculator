var submitButton = document.querySelector('input[type=submit]')
submitButton.addEventListener('click', submitForm)

function submitForm(event) {
    var totalInput = document.getElementById('total')
    var total = totalInput.value
    console.log(total)
}