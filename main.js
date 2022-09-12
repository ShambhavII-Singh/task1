let button = document.querySelector('button');
let hex = document.querySelector('#hexcode');
let rgb = document.querySelector('#rgbcode');

function hexCode () {
    let hexcode = Math.random().toString(16).slice(2,8).toUpperCase();
    return hexcode;
}

function hexToRGB(hex) {
    rgbcode = 'RGB('
    for (let i = 0; i<3; i = i+2) {
        int = parseInt(hex.slice(i, i + 2),16);
        rgbcode += int.toString();
        rgbcode += ',';
    }
    int = parseInt(hex.slice(4,6),16);
    rgbcode = rgbcode+int.toString()+')';
    rgb.innerHTML = rgbcode;
}

function randomColourGenerator() {
    inter = hexCode();
    colour = '#'+inter;
    document.body.style.backgroundColor = colour;
    hex.innerHTML = colour;
    return inter;
}

button.addEventListener('click', function() {
    hexToRGB(randomColourGenerator());
})
