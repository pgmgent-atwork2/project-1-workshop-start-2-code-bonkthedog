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
                console.log();
                hiddenImages[0].classList.remove("imgHide");
                hiddenImages[0].classList.add("imgShow");
                imageIndex++;
                counterValue -= requiredCredits; // subtract requiredCredits from counterValue
            }
        }
    });
}

function addEventListenerToButton2(buttonId, requiredCredits, imgClass) {
    document.getElementById(buttonId).addEventListener("click", function() {
        console.log("button clicked", buttonId);
        const images = document.querySelectorAll(`.middleBox ${imgClass}`);
        const hiddenImages = Array.from(images).filter(img => img.classList.contains('imgHide'));
        
        console.log(hiddenImages);

            if (hiddenImages.length > 0) {
                hiddenImages[0].classList.remove("imgHide");
                hiddenImages[0].classList.add("imgShow");
                imageIndex++;
                counterValue -= requiredCredits; // subtract requiredCredits from counterValue
            }
    });
}






addEventListenerToButton("dogBat", 25, ".imgHide");
addEventListenerToButton2("middleRowButton1", 30, ".row1-dog1");
addEventListenerToButton2("middleRowButton2", 40, ".row2-dog1");
addEventListenerToButton2("middleRowButton3", 50, ".row3-dog1");
addEventListenerToButton2("middleRowButton4", 60, ".row4-dog1");
addEventListenerToButton2("middleRowButton5", 70, ".row5-dog1");
ddEventListenerToButton2("middleRowButton6", 80, ".row6-dog1");







// let imageIndex = 0;
// let counterValue = 0;
// import { dogImages } from './assets/data.js';

// window.onload = function() {
//     const rows = ['row1', 'row2', 'row3', 'row4', 'row5', 'row6'];
//     rows.forEach((row, index) => {
//         const images = document.querySelectorAll(`.${row} img`);
//         images.forEach((img, imgIndex) => {
//             img.src = `/assets/img/${dogImages[1]}`;
//         });
//     });
// };

// document.querySelector(".main-dog img").addEventListener("click", function() {
//     counterValue++;
//     document.querySelector(".clickCounter").textContent = counterValue;
// });

// setInterval(function() {
//     counterValue += imageIndex ;
//     document.querySelector(".clickCounter").textContent = counterValue;
// }, 1000);

// function addEventListenerToButton(buttonId, requiredCredits, rowClass) {
//     document.getElementById(buttonId).addEventListener("click", function() {
//         if (counterValue >= requiredCredits) {
//             const images = document.querySelectorAll(rowClass);
//             const shownImages = document.querySelectorAll(rowClass + '.imgShow');
//             if (shownImages.length < 6) {
//                 if (imageIndex < images.length) {
//                     images[imageIndex].classList.remove("imgHide");
//                     images[imageIndex].classList.add("imgShow");
//                     imageIndex++;
//                 }
//                 else {
//                     document.getElementById(buttonId).textContent = "Max reached";
//                 }
//                 counterValue -= requiredCredits;
//                 document.querySelector(".clickCounter").textContent = counterValue;
//             } else {
//                 alert("Max 6 images per row");
//             }
//         } else {
//             alert("You don't have enough points");
//         }
//     });
// }

// // Call the function for each button and row group
// addEventListenerToButton("dogBat", 25, ".imgHide");
// addEventListenerToButton("middleRowButton1", 30, ".row1");
// addEventListenerToButton("middleRowButton2", 40, ".row2");
// addEventListenerToButton("middleRowButton3", 50, ".row3");
// addEventListenerToButton("middleRowButton4", 60, ".row4");
// addEventListenerToButton("middleRowButton5", 70, ".row5");
// addEventListenerToButton("middleRowButton6", 80, ".row6");
// // Add more calls for other buttons and row groups

