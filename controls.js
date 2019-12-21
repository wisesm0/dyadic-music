const playbutton = document.getElementById('play-pause-button');
const iframage = document.getElementById('ifr');
const i = playbutton.querySelector('i');

const playnext = document.getElementById('play-next');
const playprevious = document.getElementById('play-previous');

const scenes = [
    '../scenes/left-behind/index.html',
    '../scenes/urban-decay/index.html',
    '../scenes/big-bang/index.html'
];

playbutton.addEventListener('click', function() {
    playPause();
});

playnext.addEventListener('click', () => {
    playNext();
});

playprevious.addEventListener('click', () => {
    playPrevious();
});

let paused = true;

function playPause()
{
    setTimeout(function()
    {
        if(paused)
        {
            iframage.contentWindow.postMessage({
                type: 'unlock'
            }, '*');
            console.log('starting song...');
            i.setAttribute("class","fas fa-pause");
            paused = false;
        }
        else
        {
            iframage.contentWindow.postMessage({
                type: 'close'
            }, '*');
            console.log('stopping song...');
            i.setAttribute("class","fas fa-play");
            paused = true;
        }
    },200);
}

let idx = 0;

function playNext() {
    iframage.contentWindow.postMessage({
        type: 'close'
    }, '*');
    setTimeout(() => {
        iframage.contentWindow.postMessage({
            type: 'unlock'
        }, '*');
    }, 1500);

    // idx++;
    // if (idx > scenes.length-1) {
    //     idx = 0;
    // }
    // iframage.src = scenes[idx];
}

function playPrevious() {
    iframage.contentWindow.postMessage({
        type: 'close'
    }, '*');
    setTimeout(() => {
        iframage.contentWindow.postMessage({
            type: 'unlock'
        }, '*');
    }, 1500);
    // idx--;
    // if (idx < 0) {
    //     idx = scenes.length-1;
    // }
    // iframage.src = scenes[idx];
}