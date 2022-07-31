let colomn = 16;
let row = 16;
let grid = colomn * row;
let sketchConteiner = document.querySelector('.sketchConteiner');
let mouseDown = false;
document.addEventListener('mousedown', () => {mouseDown = true})
document.addEventListener('mouseup', () => {mouseDown = false})

function gridBuilder(grid) {
    for (let i = 0; i < grid; i++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('class','sketchPixel');
        pixel.addEventListener('mousedown', draw);
        pixel.addEventListener('mouseover', draw)
        sketchConteiner.appendChild(pixel);
    }        
}

function draw (e) {
    if (e.type === 'mouseover' && !mouseDown){
        return
    }else {
        e.target.style.backgroundColor = 'black'
    }    
}

gridBuilder(grid)