function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operation").value;
  let result;

  if (op == "add") {
    result = num1 + num2;
  } else if (op == "sub") {
    result = num1 - num2;
  } else if (op == "multi") {
    result = num1 * num2;
  } else if (op == "div") {
    result = num1 / num2;
  }

  document.getElementById("result").innerHTML = result;
}