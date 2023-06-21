let endPopup = document.getElementById("endPopup");
let PopupActive = document.getElementById("end");
let closePop = document.getElementById("closeEndPopup")

// page accueil
PopupActive.addEventListener("click", function (event) {
    endPopup.classList.add("Active");
});


closePop.addEventListener("click", function (close) {
    endPopup.classList.remove("Active");
});

