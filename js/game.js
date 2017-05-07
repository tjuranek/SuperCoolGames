function runGame() {
    window.addEventListener('keydown', keyHandler);
}

function left() {
    var element = document.getElementById("mario");
    var position = parseInt(element.style.left);

    if (position > 30) {
        element.style.left = position - 15 + 'px';
    }
    else {
        element.style.left = position + 15 + 'px';
    }
}

function right() {
    var element = document.getElementById("mario");
    var position = parseInt(element.style.left);

    if (position < 1450) {
        element.style.left = position + 15 + 'px';
    }
    else {
        element.style.left = position - 15 + 'px';
    }
}

function keyHandler(evt) {
    if (evt.keyCode == 37) {
        left();
    }
    else if (evt.keyCode == 39) {
        right();
    }
    else {
        console.log("Uh oh! Ya done messed up!");
    }
};
