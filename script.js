function fetchAndCreateList() {
    fetch('list.txt')
        .then(response => response.text())
        .then(data => {
            const list = document.getElementById('list');
            const lines = data.split('\n');
            lines.forEach(line => {
                if (line.trim()) {
                    const li = document.createElement('li');
                    li.textContent = line.trim();
                    list.appendChild(li);
                }
            });
            startAnimation();  // Start animation after list items are created
        })
        .catch(error => console.error('Error fetching the list:', error));
}

function startAnimation() {
    const items = document.querySelectorAll('#list li');
    let index = 0;

    function crossOutNextItem() {
        if (index < items.length) {
            items[index].classList.add('strikethrough', 'fade-out');
            index++;
            setTimeout(crossOutNextItem, 500);
        }
    }

    setTimeout(crossOutNextItem, 500);
}

window.onload = fetchAndCreateList;
