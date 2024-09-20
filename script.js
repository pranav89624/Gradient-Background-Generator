// Seting Variables.
// ----------------------------------

var bg = document.getElementById("bg");

var color1 = document.querySelector(".color1");

var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

// Functin to Setting the Background.
// ------------------------------------

function setGradient()
{

    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";


    bg.textContent = "background: " + body.style.background + ";";

}

// Calling function from input 1.
// ----------------------------------

color1.addEventListener("input", setGradient);

// Calling function from input 2.
// ----------------------------------

color2.addEventListener("input", setGradient);
