// petit Darkmode
let drkBtn = document.getElementById("drkModeBtn");

if (localStorage.getItem("mode") == ("darkMode")) {
    document.body.classList.add("darkMode");
    drkBtn.style.backgroundColor = 'rgba(247, 247, 247, 0.979)';
};

drkBtn.addEventListener("click", function (drkModeEvent) {
    document.body.classList.toggle("darkMode");

    if (document.body.classList.contains("darkMode")) {
        drkBtn.style.backgroundColor = 'rgba(247, 247, 247, 0.979)';
        localStorage.setItem("mode", "darkMode");

    }
    else {

        drkBtn.style.backgroundColor = 'rgb(58, 55, 55)';
        localStorage.clear();
    }

});

