let popup = document.getElementById("popup");
let newsLetter= document.getElementsByClassName("linkNewsLetter");
let closePop = document.getElementById("closePopup")

// page accueil
newsLetter[0].addEventListener("click", function (event) {
 popup.classList.add("popupActive");
});

newsLetter[1].addEventListener("click", function (event) {
    popup.classList.add("popupActive");
});

 newsLetter[2].addEventListener("click", function (event) {
    popup.classList.add("popupActive");
   });

   newsLetter[3].addEventListener("click", function (event) {
    popup.classList.add("popupActive");
   });

   newsLetter[4].addEventListener("click", function (event) {
    popup.classList.add("popupActive");
   });

   newsLetter[5].addEventListener("click", function (event) {
    popup.classList.add("popupActive");
   });


closePop.addEventListener("click", function(closeNewsletter){
    popup.classList.remove("popupActive");
   });


