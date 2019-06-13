let keys = document.querySelector('.keys');

function playAudio(e) {
    let audio;

    if (e.type == 'click') {
        if (e.target.classList == 'key') {
            audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
        } else {
            return;
        }
    } else {
        audio = document.querySelector(`audio[data-key="${e.key.toUpperCase()}"]`);
    }


    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();
}

function animate(e) {
    let key;

    if (e.type == 'click') {
        if (e.target.classList == 'key') {
            key = document.querySelector(`div[data-key="${e.target.dataset.key}"]`);
        } else {
            return;
        }
    } else {
        key = document.querySelector(`div[data-key="${e.key.toUpperCase()}"]`);
    }

    key.classList.add('playing');
    key.addEventListener('transitionstart', () => {
        
    })
    // get element
    // add 'playing' class
    // remove when animation is over
}

function playSoundAndAnimate(e) {
    playAudio(e);
    animate(e);
}

window.addEventListener('keydown', (e) => playSoundAndAnimate(e));
keys.addEventListener('click', (e) => playSoundAndAnimate(e));
