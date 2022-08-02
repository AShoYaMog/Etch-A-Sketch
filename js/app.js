let mouseDown = false;
let sketchConteiner = document.querySelector('.sketchConteiner');
let grid = 0;
let gridInput = document.querySelector('#gridSize');
let colorPicer = document.querySelector('#color');
let colorPaletteConteiner = document.querySelector('.palett');
let paletteElement = document.querySelectorAll('.palettElement');
document.addEventListener('mousedown', () => {mouseDown = true});
document.addEventListener('mouseup', () => {mouseDown = false});
sketchConteiner.addEventListener('mouseleave', () => {mouseDown = false});
sketchConteiner.addEventListener('dragstart', (e) => {e.preventDefault()});
sketchConteiner.addEventListener('drop', (e) => {e.preventDefault()});
gridInput.addEventListener('mouseup', () => {gridControle();});
paletteElement.forEach(function(button) {
    button.addEventListener('mouseup', function (e) {
    console.log(e.target.value)
    colorPicer.value = e.target.value
    })
})

function gridControle() {
    grid = gridInput.value ** 2;
    document.querySelector('.gridSize').textContent = `Grid size: ${gridInput.value}x${gridInput.value}`;
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
    paletElement.setAttribute('class', 'palettElement');
    paletElement.style.backgroundColor = colorPicer.value;
    paletElement.addEventListener('mouseup', () => {
        colorPicer.value = paletElement.value;
    })
    colorPaletteConteiner.appendChild(paletElement); 
}

function palletRemoveColor () {
    colorPaletteConteiner.removeChild(colorPaletteConteiner.lastChild)
}

function clearPalette () {
    colorPaletteConteiner.innerHTML = '<button class="palettAddColor" onclick="paletAddColor()">+</button>'
}

function draw (e) {
    if (e.type === 'mouseover' && !mouseDown) return;    
    e.target.style.backgroundColor = colorPicer.value;       
}

gridControle(grid)


