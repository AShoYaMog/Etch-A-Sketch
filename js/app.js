let colomn = 32;
let row = 32;
let sketchConteiner = document.querySelector('.sketchConteiner');


function gridBuilder(colomn,row) {
    for (let a = 0; a < colomn; a++) {
        let sketchRow = document.createElement('div');
        sketchConteiner.appendChild(sketchRow);
        for (let i = 0; i < row; i++) {
            let psketchColomn = document.createElement('div');
            psketchColomn.setAttribute('class','sketchPixel');
            sketchRow.appendChild(psketchColomn);
        }
    }
}

gridBuilder(colomn,row)
