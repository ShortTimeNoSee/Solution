const items = document.querySelectorAll('#list li');
let index = 0;

function crossOutNextItem() {
    if (index < items.length) {
        items[index].classList.add('strikethrough', 'fade-out');
        index++;
        setTimeout(crossOutNextItem, 500);
    }
}

window.onload = () => {
    setTimeout(crossOutNextItem, 500);
};
