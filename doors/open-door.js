
const enterButton = document.getElementsByClassName("enter");
const door = document.getElementsByClassName("door");
const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
const iframage = document.getElementById('ifr');

window.addEventListener('message', unlockEvent);

enterButton[0].addEventListener("click", function() {
    unlock(enterButton[0]);
});

function unlockEvent(event) {
    unlock(enterButton[0]);
}

function open(leftdoor, rightdoor, button) {
    TweenLite.to(leftdoor, 1.5, { width: 0 });
    TweenLite.to(rightdoor, 1.5, { width: 0 });
    TweenLite.to(button, 1.5, { "margin-left" : "-60px" , 
        onComplete: function() {
            leftdoor.remove();
            rightdoor.remove();
            button.remove();
        }
    });
}
    
function unlock(el){
    iframage.contentWindow.postMessage('message', '*');
    if(el) {
        TweenLite.to(el, .3, {scaleX:0, scaleY:0, 
            onComplete: function() {
                open(left[0], right[0], el);
            }
        });
    }
}
