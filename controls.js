
const playbutton = document.getElementById('play-pause-button');
const playnext = document.getElementById('play-next');
const playprevious = document.getElementById('play-previous');

const iframage = document.getElementById('ifr');
const i = playbutton.querySelector('i');

const enterButton = document.getElementsByClassName("enter");
const door = document.getElementsByClassName("door");
const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");

const scenes = [
    '../scenes/left-behind/index.html',
    '../scenes/urban-decay/index.html',
    '../scenes/big-bang/index.html'
];

let tween1;
let tween2;
let tween3;
let logoTween;

playbutton.addEventListener('click', function() {
    playPause();
});

playnext.addEventListener('click', () => {
    playNext();
});

playprevious.addEventListener('click', () => {
    playPrevious();
});

enterButton[0].addEventListener("click", function() {
    unlock(enterButton[0]);
});

let paused = true;
let firstUnlocked = false;

function playPause()
{
        if(paused)
        {

            if (!firstUnlocked) {
                unlock(enterButton[0]);
                firstUnlocked = true;
            }
            i.setAttribute("class","fas fa-pause");
            paused = false;
            iframage.contentWindow.postMessage({
                type: 'play'
            }, '*');
        }
        else
        {
            // close();
            i.setAttribute("class","fas fa-play");
            paused = true;
            iframage.contentWindow.postMessage({
                type: 'pause'
            }, '*');
        }
}

let idx = 0;

function playNext() {
    if (tween1) {
        i.setAttribute("class","fas fa-play");
        close();
        setTimeout(() => {
            // open(left[0], right[0], enterButton[0]);
            unlock(enterButton[0]);
            idx++;
            if (idx > scenes.length-1) {
                idx = 0;
            }
            iframage.src = scenes[idx];
        }, 1000);
    }
}

function playPrevious() {
    i.setAttribute("class","fas fa-play");
    if (tween1) {
        close();
        setTimeout(() => {
            // open(left[0], right[0], enterButton[0]);
            unlock(enterButton[0]);
            idx--;
            if (idx < 0) {
                idx = scenes.length-1;
            }
            iframage.src = scenes[idx];
        }, 1000);
    }
}

function close() {
    tween1.reverse();
    tween2.reverse();
    tween3.reverse();
}

function open(leftdoor, rightdoor, button) {
    tween1 = TweenLite.to(leftdoor, 0.5, { width: 0 });
    tween2 = TweenLite.to(rightdoor, 0.5, { width: 0 });
    tween3 = TweenLite.to(button, 0.5, { "margin-left" : "-60px" , 
        onComplete: function() {}
    });
}
    
function unlock(el){
    if(el) {
        logoTween = TweenLite.to(el, .3, {scaleX:0, scaleY:0, 
            onComplete: function() {
                open(left[0], right[0], el);
            }
        });
    }
}