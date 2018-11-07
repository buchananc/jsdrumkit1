//////////////////// PLAY SOUND ///////////////////
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;      //stop function from running all together
    audio.currentTime = 0;  //allows audio to sound at each keystroke
    audio.play();
    key.classList.add('playing');   //adds playing css when key is pressed
}

//////////////////// REMOVE SOUND & TRANSITION ///////////////////
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);