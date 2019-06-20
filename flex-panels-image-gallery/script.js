let panels = document.querySelector('.panels');
let lastClicked;

panels.addEventListener('click', function toggleOpen(e) {
    if (lastClicked) {
        lastClicked.classList.remove('open');
    }

    let clickedNode = e.target.classList.contains('panel') ? e.target : e.target.parentNode;

    if (lastClicked == clickedNode) {
        clickedNode.classList.remove('open');
        return;
    }
    clickedNode.classList.add('open');
    lastClicked = clickedNode;
});

panels.addEventListener('transitionend', function toggleWords(e) {
    if (e.propertyName.includes('flex')) {
        e.target.classList.toggle('flyin');
    }
});
