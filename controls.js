const playbutton = document.getElementById('play-pause-button');
const iframage = document.getElementById('ifr');
const i = playbutton.querySelector('i');

playbutton.addEventListener('click', function() {
    playPause();
});

let paused = true;

function playPause()
{
    setTimeout(function()
    {
        iframage.contentWindow.postMessage('message', '*');
        if(paused)
        {
            console.log('starting song...');
            i.setAttribute("class","fas fa-pause");
            paused = false;
        }
        else
        {
            console.log('stopping song...');
            i.setAttribute("class","fas fa-play");
            paused = true;
        }
    },200);
}