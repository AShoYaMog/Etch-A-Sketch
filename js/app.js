let mouseDown = false;
let sketchConteiner = document.querySelector('.sketchConteiner');
let grid = 0;
let gridInput = document.querySelector('#gridSize');
let colorPicer = document.querySelector('#colorInput');
let colorPaletteConteiner = document.querySelector('.palett');
let defoltColor = document.querySelector('.defoltColor');
let paletteElement = document.querySelectorAll('.buttonSmall');
let rainbowButton = document.querySelector('#rainbowButton');
document.addEventListener('mousedown', () => {mouseDown = true});
document.addEventListener('mouseup', () => {mouseDown = false});
sketchConteiner.addEventListener('mouseleave', () => {mouseDown = false});
sketchConteiner.addEventListener('dragstart', (e) => {e.preventDefault()});
sketchConteiner.addEventListener('drop', (e) => {e.preventDefault()});
gridInput.addEventListener('input', () => {document.querySelector('.gridSize').textContent = `Grid size: ${gridInput.value}x${gridInput.value}`;});
gridInput.addEventListener('mouseup', () => {gridControle(grid)});
paletteElement.forEach(function(button) {
    button.addEventListener('mouseup', function (e) {
    colorPicer.value = e.target.value
    })
})
rainbowButton.addEventListener('click', () => {
    if (rainbowButton.value == 'off') {
        rainbowButton.value = 'on';
        rainbowButton.setAttribute('style', 'background-color: #ADD8E6;');
        return
    };
    if (rainbowButton.value == 'on') {
        rainbowButton.value = 'off';
        rainbowButton.removeAttribute('style');
    };
})

function gridControle() {
    grid = gridInput.value ** 2;
    gridDestroer(sketchConteiner);
    gridBuilder(grid);
}

function gridDestroer(sketchConteiner) {
    sketchConteiner.innerHTML = '';
}

function gridBuilder(grid) {
    sketchConteiner.style.cssText = `grid-template-columns: repeat(${gridInput.value}, 1fr); grid-template-rows: repeat(${gridInput.value}, 1fr);`;
    for (let i = 0; i < grid; i++) {
        let pixel = document.createElement('div');
        pixel.style.backgroundColor = 'white'
        pixel.addEventListener('mousedown', draw);
        pixel.addEventListener('mouseover', draw)
        sketchConteiner.appendChild(pixel);
    }        
}

function palettAddColor () {
    let paletElement = document.createElement('button');
    paletElement.setAttribute('value', colorPicer.value);
    paletElement.setAttribute('class', 'buttonSmall border');
    paletElement.style.backgroundColor = colorPicer.value;
    paletElement.addEventListener('mouseup', () => {
        colorPicer.value = paletElement.value;
    })
    colorPaletteConteiner.appendChild(paletElement); 
}

function palletRemoveColor () {
    console.log(colorPaletteConteiner.lastChild)
    if (colorPaletteConteiner.lastChild ===  defoltColor) return;
    colorPaletteConteiner.removeChild(colorPaletteConteiner.lastChild)
}

function clearPalette () {
    colorPaletteConteiner.innerHTML = defoltColor.innerHTML
}

function randomColor() {
    const COLOR_COMBINATION = 16777215;
    let randomColor = Math.floor(Math.random()*COLOR_COMBINATION).toString(16);
    return '#' + randomColor
}

function draw (e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (rainbowButton.value === 'on')  return e.target.style.backgroundColor = randomColor();
    e.target.style.backgroundColor = colorPicer.value; 
}

gridControle(grid)
let a = 255;
alert(a.toString(16))
