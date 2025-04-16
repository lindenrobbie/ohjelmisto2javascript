document.getElementById("source").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let name = firstname + " " + lastname;

    document.getElementById("target").textContent = "Your name is " + name;
    console.log("Your name is " + name);
});