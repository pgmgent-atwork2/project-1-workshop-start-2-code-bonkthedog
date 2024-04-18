let imageIndex = 0;
let counterValue = 0;

document.getElementById("toggleImages").addEventListener("click", function() {
    const images = document.querySelectorAll(".imgHide");
    if (imageIndex < images.length) {
        images[imageIndex].classList.remove("dog[imageIndex]");
        images[imageIndex].classList.add("imgShow");
        imageIndex++;
    }
    else {
        document.getElementById("toggleImages").textContent = "Max reached";
    }
});

setInterval(function() {
    counterValue += imageIndex;
    document.querySelector(".clickCounter").textContent = counterValue;
}, 1000);