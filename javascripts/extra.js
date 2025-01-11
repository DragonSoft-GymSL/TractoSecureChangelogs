const purple = "#5E2173"
const blue = "#93FAF8"
const yellow = "#FCF362"

var footer = document.querySelector("footer")
footer.innerHTML = "<p style='display: flex; justify-content: center; font-size: 1.1rem'>DragonSoft@GymSL</p>"
footer.style.background = purple;

var h1s = document.querySelectorAll('h1')
for (var i = 0; i < h1s.length; i++) {
    h1s[i].style.color = blue;
}

var nav__titles = document.querySelectorAll('.md-nav__title')
for (var j = 0; j < nav__titles.length; j++) {
    nav__titles[j].style.color = yellow;
    console.log(nav__titles[j].textContent)
    if (nav__titles[j].textContent.includes("Table of contents")) {
        nav__titles[j].textContent = "Inhaltsverzeichnis"
    }
}

var header = document.querySelector("header")
header.style.background = purple;