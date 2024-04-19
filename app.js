let imageIndex = 0;
let counterValue = 0;

document.getElementById("dogBat").addEventListener("click", function() {
    if (counterValue >= 25) {
        const images = document.querySelectorAll(".imgHide");
        if (imageIndex < images.length) {
            images[imageIndex].classList.remove("dog[imageIndex]");
            images[imageIndex].classList.add("imgShow");
            imageIndex++;
        }
        else {
            document.getElementById("dogBat").textContent = "Max reached";
        }
        counterValue -= 25;
        document.querySelector(".clickCounter").textContent = counterValue;
    } else {
        alert("You don't have enough points");
    }
});

document.querySelector(".main-dog img").addEventListener("click", function() {
    counterValue++;
    document.querySelector(".clickCounter").textContent = counterValue;
});

setInterval(function() {
    counterValue += imageIndex ;
    document.querySelector(".clickCounter").textContent = counterValue;
}, 1000);

