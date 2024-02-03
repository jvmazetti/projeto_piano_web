const keys = document.querySelectorAll('.key');
const checkBox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keySection = document.querySelector('.piano__keys')

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key));
    key.addEventListener('mouseup', () => handleMouseUp(key));
})

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));
    if(key.className.includes('black')){
        key.classList.add('black--pressed');
        return;
    }
    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {
    if(key.className.includes('black')){
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
}

checkBox.addEventListener('change', ({ target }) => {
    if(target.checked) {
        switcher.classList.add('switcher--active');
        keySection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keySection.classList.add('disabled-keys');
});

const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "q": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "w": () => handleMouseDown(keys[4]),
    "3": () => handleMouseDown(keys[5]),
    "e": () => handleMouseDown(keys[6]),
    "4": () => handleMouseDown(keys[7]),
    "r": () => handleMouseDown(keys[8]),
    "5": () => handleMouseDown(keys[9]),
    "t": () => handleMouseDown(keys[10]),
    "6": () => handleMouseDown(keys[11]),
    "y": () => handleMouseDown(keys[12]),
    "7": () => handleMouseDown(keys[13]),
    "u": () => handleMouseDown(keys[14]),
    "8": () => handleMouseDown(keys[15]),
    "i": () => handleMouseDown(keys[16]),
    "9": () => handleMouseDown(keys[17]),
    "o": () => handleMouseDown(keys[18]),
    "0": () => handleMouseDown(keys[19]),
    "p": () => handleMouseDown(keys[20]),
    "-": () => handleMouseDown(keys[21]),
    "ç": () => handleMouseDown(keys[22]),
    "=": () => handleMouseDown(keys[23]),
    "a": () => handleMouseDown(keys[24]),
    "z": () => handleMouseDown(keys[25]),
    "s": () => handleMouseDown(keys[26]),
    "x": () => handleMouseDown(keys[27]),
    "d": () => handleMouseDown(keys[28]),
    "c": () => handleMouseDown(keys[29]),
    "f": () => handleMouseDown(keys[30]),
    "v": () => handleMouseDown(keys[31]),
    "g": () => handleMouseDown(keys[32]),
    "b": () => handleMouseDown(keys[33]),
    "h": () => handleMouseDown(keys[34]),
    "n": () => handleMouseDown(keys[35]),
}

const keyUpMapper = {
    "Tab": () => handleMouseUp (keys[0]),
    "1": () => handleMouseUp (keys[1]),
    "q": () => handleMouseUp (keys[2]),
    "2": () => handleMouseUp (keys[3]),
    "w": () => handleMouseUp (keys[4]),
    "3": () => handleMouseUp (keys[5]),
    "e": () => handleMouseUp (keys[6]),
    "4": () => handleMouseUp (keys[7]),
    "r": () => handleMouseUp (keys[8]),
    "5": () => handleMouseUp (keys[9]),
    "t": () => handleMouseUp (keys[10]),
    "6": () => handleMouseUp (keys[11]),
    "y": () => handleMouseUp (keys[12]),
    "7": () => handleMouseUp (keys[13]),
    "u": () => handleMouseUp (keys[14]),
    "8": () => handleMouseUp (keys[15]),
    "i": () => handleMouseUp (keys[16]),
    "9": () => handleMouseUp (keys[17]),
    "o": () => handleMouseUp (keys[18]),
    "0": () => handleMouseUp (keys[19]),
    "p": () => handleMouseUp (keys[20]),
    "-": () => handleMouseUp (keys[21]),
    "ç": () => handleMouseUp (keys[22]),
    "=": () => handleMouseUp (keys[23]),
    "a": () => handleMouseUp (keys[24]),
    "z": () => handleMouseUp (keys[25]),
    "s": () => handleMouseUp (keys[26]),
    "x": () => handleMouseUp (keys[27]),
    "d": () => handleMouseUp (keys[28]),
    "c": () => handleMouseUp (keys[29]),
    "f": () => handleMouseUp (keys[30]),
    "v": () => handleMouseUp (keys[31]),
    "g": () => handleMouseUp (keys[32]),
    "b": () => handleMouseUp (keys[33]),
    "h": () => handleMouseUp (keys[34]),
    "n": () => handleMouseUp (keys[35]),
}


document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]();
})

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    keyUpMapper[event.key]();
})