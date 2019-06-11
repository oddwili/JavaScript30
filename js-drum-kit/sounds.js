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
