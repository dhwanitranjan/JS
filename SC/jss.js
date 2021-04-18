// Makes the crash cymbal move when played
function animateCrash() {
    crash.style.transform = 'rotate(0deg) scale(1.5)';
}

// Removes the animation after the crash cymbal sound is done playing
function removeCrashAnimation(e) {
    if (e.propertyName !== 'transform') return;
    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';    
}

// Makes the top hi-hat cymbal move when played
function animateHiHat() {
    hihat.style.top = '171px';
}

// Removes the animation after the top hi-hat cymbal sound is done playing
function removeHiHatAnimation(e) {
    if (e.propertyName !== 'top') return;
    e.target.style.top = '166px';
}

// Removes the animation from the key that was pressed after it's done playing
function removeKeyAnimation(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

// Generic function that will apply to both clicks and key presses
// Plays the sound of the appropriate key and adds any relevant animations
function playSound(code) {
    var audio = document.querySelector('audio[data-key="' + code + '"]'),
        key = document.querySelector('div[data-key="' + code + '"]');
    if (!audio || !key) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    if (code === 67) {
        animateCrash();
    } else if (code === 72) {
        animateHiHat();
    }    
}

// When a key is pressed, play the assigned sound
function playSoundKey(e) {
    var code = e.keyCode;
    
    playSound(code);
}

// When a key is clicked, play the assigned sound
function playSoundClick(e) {
    // If we click on the key text (e.g. C)
    if (e.target.tagName === 'SPAN') {
        var code = e.target.parentElement.dataset.key;
    // If we click on the button but not the key text
    } else {
        var code = e.target.dataset.key;
    }

    playSound(code);
}

// Grab the crash cymbal, hi-hat cymbal, and all key elements
var crash = document.querySelector('.crash-cymbal'),
    hihat = document.querySelector('.hihat-top-cymbal'),
    // the below actually returns a NodeList, not an Array
    // we don't really care in this situation, but it would matter in most cases
    keys = document.querySelectorAll('.key');

// Loop over all key elements, create a function for each key to do something when clicked and when any animation are finished
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', playSoundClick);
    keys[i].addEventListener('transitionend', removeKeyAnimation);
} 
    
// Functions for crash cymbal and hi-hat cymbal to stop the animation
crash.addEventListener('transitionend', removeCrashAnimation);
hihat.addEventListener('transitionend', removeHiHatAnimation);

// Function for all key presses to play the assigned sound 
window.addEventListener('keydown', playSoundKey); 