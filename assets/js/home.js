var inputFocus = false;

function toggleSend() {
    if (inputFocus == false) {
        document.getElementById('sendPost').style.display = "inline";
        inputFocus = true;    
    } else {
        document.getElementById('sendPost').style.display = "none";
        inputFocus = false;
    }
}