// NAVBAR

var navOpen = false;

function openNav() {
    if (navOpen == false) {
        document.getElementById('heading').style.display = "none";
        document.getElementById('defaultHeading').style.display = "inline";
        document.getElementById('burger').style.display = "none";
        document.getElementById('close').style.display = "inline";
        document.getElementById('sideNav').style.width = "200px";
        if (screen.width >= 900) {
            document.getElementById('sideNav').style.width = "270px";
        }
        navOpen = true;
    } else {
        document.getElementById('heading').style.display = "inline";
        document.getElementById('defaultHeading').style.display = "none";
        document.getElementById('burger').style.display = "inline";
        document.getElementById('close').style.display = "none";
        document.getElementById('sideNav').style.width = "0";
        navOpen = false;
    }
}

// REDIRECT LINK

function redirect(url) {
    window.open(url, '_blank');
}

// TOGGLE SHOW/HIDE CATEGORY

function toggleCategory(category) {
    console.log(category);
    var display = document.getElementById(category).style.display;
    console.log(display);
    if (display == "flex") {
        document.getElementById(category).style.display = "none";
    } else {
        document.getElementById(category).style.display = "flex";
    }
}