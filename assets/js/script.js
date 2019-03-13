function hitung() {

  var number1 = document.getElementById("number1").value
  var number2 = document.getElementById("number2").value
  var operator  = document.getElementById("opr")

  switch (operator.value) {
    case "*":
      document.getElementById("hasil").innerHTML = parseInt(number1) * parseInt(number2)
      break;
    case "/":
      document.getElementById("hasil").innerHTML = parseInt(number1) / parseInt(number2)
      break;
    case "+":
      document.getElementById("hasil").innerHTML = parseInt(number1) + parseInt(number2)
      break;
    case "-":
      document.getElementById("hasil").innerHTML = parseInt(number1) - parseInt(number2)
      break;
  }
}
