function toggleChats(roomType) {
    var down = roomType + "Open";
    var right = roomType + "Closed";
    var openDisplay = document.getElementById(down).style.display;
    var rooms = roomType + "Rooms";
    if (openDisplay == "inline") {
        document.getElementById(down).style.display = "none";
        document.getElementById(right).style.display = "inline";
        document.getElementById(rooms).style.display = "none";
    } else {
        document.getElementById(down).style.display = "inline";
        document.getElementById(right).style.display = "none";
        document.getElementById(rooms).style.display = "block";
    }
}