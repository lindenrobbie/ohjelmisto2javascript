document.getElementById("start").addEventListener("click", function() {
    let calculation = document.getElementById("calculation").value;
    let result;

    if (calculation.includes("+")) {
        let parts = calculation.split("+");
        result = parseInt(parts[0]) + parseInt(parts[1]);
    } else if (calculation.includes("-")) {
        let parts = calculation.split("-");
        result = parseInt(parts[0]) - parseInt(parts[1]);
    } else if (calculation.includes("*")) {
        let parts = calculation.split("*");
        result = parseInt(parts[0]) * parseInt(parts[1]);
    } else if (calculation.includes("/")) {
        let parts = calculation.split("/");
        result = parseInt(parts[0]) / parseInt(parts[1]);
    }

    document.getElementById("result").textContent = "Result: " + result;
    console.log(result);
});