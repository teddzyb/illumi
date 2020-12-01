var navOpen = false;

function openNav() {
    if (navOpen == false) {
        document.getElementById('heading').innerHTML = "illumi💫";
        document.getElementById('burger').style.display = "none";
        document.getElementById('close').style.display = "inline";
        document.getElementById('sideNav').style.width = "200px";
        navOpen = true;
    } else {
        document.getElementById('heading').innerHTML = "Discover✨";
        document.getElementById('burger').style.display = "inline";
        document.getElementById('close').style.display = "none";
        document.getElementById('sideNav').style.width = "0";
        navOpen = false;
    }
}