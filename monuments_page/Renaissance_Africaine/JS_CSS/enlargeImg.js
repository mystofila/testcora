let modal = document.getElementsByClassName("enLargeImg");
let closeImg = document.getElementById("closeImg");
let img = document.querySelectorAll(".imgClick");
let blurItem = document.querySelectorAll(".blurTarget");
let blurAll = false;
let actualZIndex = 1;


img.forEach(item => {
    item.addEventListener("click", function (showImg) {

        // permet que la fonction close affecte toutes les images
        for (let i = 0; i < modal.length; i++) {
            closeImg.addEventListener("click", function (closeEnlarge) {
                // affiche close et img
                closeImg.style.display = "none";
                modal[i].style.display = "none"; // change le z-index pour switch d'image
                modal[i].style.zIndex = 0;
                actualZIndex = 1;
                
                // floute toute la page
                blurAll = false;
                for (let k = 0; k < blurItem.length; k++)
                {
                if(blurAll == false)
                { 
                blurItem[k].style.filter = "none";  
                }}
                
            })
        };

        switch (showImg.target.id) {

            case "myImg":
                modal[0].style.display = "block";
                closeImg.style.display = "block";

                modal[0].style.zIndex = actualZIndex;
                actualZIndex++;

                blurAll = true;

                break;

            case "myImg2":
                modal[1].style.display = "block";
                closeImg.style.display = "block";

                modal[1].style.zIndex = actualZIndex;
                actualZIndex++;

                blurAll = true;

                break;

            case "myImg3":
                modal[2].style.display = "block";
                closeImg.style.display = "block";

                modal[2].style.zIndex = actualZIndex;
                actualZIndex++;

                blurAll = true;

                break;

            case "myImg4":
                modal[3].style.display = "block";
                closeImg.style.display = "block";

                modal[3].style.zIndex = actualZIndex;
                actualZIndex++;

                blurAll = true;

                break;
        }

        for (let j = 0; j < blurItem.length; j++) {
            if (blurAll == true) {
                blurItem[j].style.filter = "blur(20px)";
            }
        }
    });

});