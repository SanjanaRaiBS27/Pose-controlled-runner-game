const character = document.querySelector('.character');
const block = document.querySelector('.block');

document.addEventListener('click', jump);

function jump() {
    if (character.classList.contains('animate')) { return; }
    character.classList.add('animate');
    setTimeout(removeJump, 300); // 300ms = length of animation
}

function removeJump() {
    character.classList.remove('animate');
}

function checkDead() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > -20 && characterTop < 20) {
        alert('Game over');
    }
}

setInterval(checkDead, 10);
