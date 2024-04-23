let imageIndex = 0;
let counterValue = 200;


window.onload = function() {
    const rows = ['row1', 'row2', 'row3', 'row4', 'row5', 'row6'];
    rows.forEach((row, index) => {
        const images = document.querySelectorAll(`.${row} img`);
        images.forEach((img, imgIndex) => {
            img.src = `/assets/img/daggoe.jpg`; // replace with your image source
        });
    });
};

document.querySelector(".main-dog img").addEventListener("click", function() {
    counterValue++;
    document.querySelector(".clickCounter").textContent = counterValue;
});

setInterval(function() {
    counterValue += imageIndex ;
    document.querySelector(".clickCounter").textContent = counterValue;
}, 1000);

function addEventListenerToButton(buttonId, requiredCredits, imgClass) {
    document.getElementById(buttonId).addEventListener("click", function() {
        if (counterValue >= requiredCredits) {
            const images = document.querySelectorAll(`.leftBox ${imgClass}`);
            const hiddenImages = Array.from(images).filter(img => img.classList.contains('imgHide'));
            if (hiddenImages.length > 0) {
                hiddenImages[0].classList.remove("imgHide");
                hiddenImages[0].classList.add("imgShow");
                imageIndex++;
                counterValue = Math.max(0, counterValue - requiredCredits); // subtract requiredCredits from counterValue, but not less than 0
            }
        }
    });
}

function addEventListenerToButton2(buttonId, requiredCredits, imgClass) {
    document.getElementById(buttonId).addEventListener("click", function() {
        if (counterValue >= requiredCredits) {
            const images = document.querySelectorAll(`.middleBox ${imgClass}`);
            const hiddenImages = Array.from(images).filter(img => img.classList.contains('imgHide'));
            if (hiddenImages.length > 0) {
                hiddenImages[0].classList.remove("imgHide");
                hiddenImages[0].classList.add("imgShow");
                imageIndex++;
                counterValue = Math.max(0, counterValue - requiredCredits); // subtract requiredCredits from counterValue, but not less than 0
            }
        }
    });
}

addEventListenerToButton("dogBat", 25, ".imgHide");
addEventListenerToButton2("middleRowButton1", 30, ".row1-dog1");
addEventListenerToButton2("middleRowButton2", 40, ".row2-dog1");
addEventListenerToButton2("middleRowButton3", 50, ".row3-dog1");
addEventListenerToButton2("middleRowButton4", 60, ".row4-dog1");
addEventListenerToButton2("middleRowButton5", 70, ".row5-dog1");
addEventListenerToButton2("middleRowButton6", 80, ".row6-dog1");





