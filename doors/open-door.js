
const enterButton = document.getElementsByClassName("enter");
const door = document.getElementsByClassName("door");
const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
const iframage = document.getElementById('ifr');

window.addEventListener('message', onMessage);

enterButton[0].addEventListener("click", function() {
    unlock(enterButton[0]);
});

let tween1;
let tween2;
let tween3;
let logoTween;

function onMessage(event) {
    console.log(event.data.type);
    if (event.data.type === 'unlock') {
        unlock(enterButton[0]);
    }
    if (event.data.type === 'close') {
        close();
    }
}

function close() {
    tween1.reverse();
    tween2.reverse();
    tween3.reverse();
    // setTimeout(() => logoTween.reverse(), 1500);
}

function open(leftdoor, rightdoor, button) {
    tween1 = TweenLite.to(leftdoor, 1.5, { width: 0 });
    tween2 = TweenLite.to(rightdoor, 1.5, { width: 0 });
    tween3 = TweenLite.to(button, 1.5, { "margin-left" : "-60px" , 
        onComplete: function() {}
            // leftdoor.remove();
            // rightdoor.remove();
            // button.remove();
        // }
    });
}
    
function unlock(el){
    iframage.contentWindow.postMessage('message', '*');
    if(el) {
        logoTween = TweenLite.to(el, .3, {scaleX:0, scaleY:0, 
            onComplete: function() {
                open(left[0], right[0], el);
            }
        });
    }
}
