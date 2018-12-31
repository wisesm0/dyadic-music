const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const audioElement = document.querySelector('audio');
const track = audioCtx.createMediaElementSource(audioElement);
track.connect(audioCtx.destination);
let dataset = {
    playing: 'false'
};

window.addEventListener('message', function() {

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    if (dataset.playing === 'false') {
        audioElement.play();
        dataset.playing = 'true';
    } else if (dataset.playing === 'true') {
        audioElement.pause();
        dataset.playing = 'false';
    }

}, false);

audioElement.addEventListener('ended', () => {
    dataset.playing = 'false';
}, false);