let popupLink = document.getElementById("popupLink");
let popup = document.getElementById("popup");
let closePop = document.getElementById("closePopup")

popupLink.addEventListener("click", function (event2) {
    popup.style.visibility = "visible";
   });

   closePop.addEventListener("click", function(closeNewsletter){
    popup.style.visibility="hidden";
   });