let btn = document.getElementById("btnSpoil");
let imgHide= document.getElementsByClassName("hidden");
let textReplace = document.getElementById("changeText");
let actualShow = false;



btn.addEventListener("click", function(showHide){
    if(actualShow == false){
        imgHide[0].classList.add("show");
        textReplace.innerText = "Cacher la photo volée!";
        actualShow = true;
    }

    else{
        imgHide[0].classList.remove("show");
        textReplace.innerText = "Dévoiler la photo volée!";
        actualShow = false;
    }

});