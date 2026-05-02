
function calculateTrip() {

    let destination = parseFloat(document.getElementById("destination").value);
    let travellers = parseInt(document.getElementById("travellers").value);
    let days = parseInt(document.getElementById("days").value);
    let budget = parseFloat(document.getElementById("budget").value);

    
    let accommodation = 150 * days;

    
    let totalCost = ((destination * travellers * days) + accommodation) * budget;

    
    let packageName = "";

    if (budget == 0.8) {
    packageName = "Economy Travel Package";
}
else if (budget == 1) {
    packageName = "Standard Travel Package";
}
else if (budget == 1.5) {
    packageName = "Luxury Travel Package";
}

    
    let destinationName =
        document.getElementById("destination").options[
        document.getElementById("destination").selectedIndex
        ].text;

    document.getElementById("result").innerHTML =
        "Estimated cost for " + travellers +
        " travellers to " + destinationName +
        " for " + days +
        " days: $" + totalCost.toFixed(0) +
        " - " + packageName;
}

window.addEventListener("scroll", function () {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach(function(box){
        let position = box.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(position < screen - 100){
            box.classList.add("show");
        }
    });
});

