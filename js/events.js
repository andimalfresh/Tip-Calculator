// var submitButton = document.querySelector('total')
// submitButton.addEventListener('click', submitForm)

// function submitForm(event) {
//     var totalInput = document.getElementById('total')
//     var total = totalInput.value
//     console.log(total)
// }


//     function Calculate()
//     {
//         var TotalProductionTime = document.getElementById("TotalProductionTime").value;
//         var TotalProductionTimeInMinutes = TotalProductionTime * 60;
//         var Breaks = document.getElementById("Breaks").value;
//         var Malfunctions = document.getElementById("Malfunctions").value;
//         var TheoreticalProductionTime = TotalProductionTimeInMinutes - Breaks - Malfunctions;       

//         document.getElementById("test").innerHTML = TheoreticalProductionTime;
//     }
// </script>   

// </body>
// </html>

var submitButton = document.querySelector('button')
submitButton.addEventListener('click', submitForm)

function submitForm(event) {

    var ticket = document.getElementById('total').value

    function calculateTip(event) {
        newTip = number = number * .2
        return newTip
    }
}