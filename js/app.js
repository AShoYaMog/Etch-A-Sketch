let grid = 0;
let gridInput = document.querySelector('#gridSize');
gridInput.addEventListener('mouseup', () => {
    gridControle();
});
let colorPicer = document.querySelector('#color');
let color = colorPicer.value;
colorPicer.addEventListener('input', () => {
    color = colorPicer.value;
});
let sketchConteiner = document.querySelector('.sketchConteiner');
let mouseDown = false;
document.addEventListener('mousedown', () => {mouseDown = true});
document.addEventListener('mouseup', () => {mouseDown = false});
sketchConteiner.addEventListener('mouseleave', () => {mouseDown = false});
sketchConteiner.addEventListener('dragstart', (e) => {e.preventDefault()});
sketchConteiner.addEventListener('drop', (e) => {e.preventDefault()});

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
        pixel.addEventListener('mousedown', draw);
        pixel.addEventListener('mouseover', draw)
        sketchConteiner.appendChild(pixel);
    }        
}

function draw (e) {
    if (e.type === 'mouseover' && !mouseDown){
        return
    }else {
        e.target.style.backgroundColor = color;
    }    
}

gridControle(grid)

