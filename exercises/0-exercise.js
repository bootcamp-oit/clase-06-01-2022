bold_items = document.getElementsByTagName("strong");

function highlight() {
    for (let index = 0; index < bold_items.length; index++) {
        bold_items[index].style.color = "yellow";
    }
}

function returnToNormal() {
    for (let index = 0; index < bold_items.length; index++) {
        bold_items[index].style.color = "black";
    }
}


