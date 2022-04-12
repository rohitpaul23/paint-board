const sheet = document.querySelector('.drawingSheet');
sheet.setAttribute('style', 'display: flex; flex-direction: column; background-color: white;');
let N = 16;
let grids;

function starterGrid(N){
    for (let i = 0; i < N; i++){
        const rowGrid = document.createElement('div');
        rowGrid.setAttribute('style', 'display: flex; flex: 1;');
        sheet.appendChild(rowGrid);
        for (let j = 0; j < N; j++) {
            const grid = document.createElement('div');
            grid.classList.add('child');
            grid.setAttribute('style', 'flex:1; ');
            rowGrid.appendChild(grid);
        }
    }
    grids = document.querySelectorAll('.drawingSheet .child');    


    grids.forEach((childGrid) => {
        childGrid.addEventListener('mouseover', (e) => {
            if (e.buttons == 1 || e.buttons == 3) {
                console.log(pencilColor);
                childGrid.setAttribute('style', childGrid.getAttribute('style') + ' background-color: ' + pencilColor + ';');            
            }
        })
    })
}

function gridFunction(pixel){
    let ratioDiv = document.querySelector('.ratio');
    ratioDiv.innerText = pixel + ' x ' + pixel;

    while (sheet.firstChild) {
        sheet.removeChild(sheet.firstChild);
    }
    starterGrid(pixel);
}


starterGrid(N);
let pencilColor = '#000000';


const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    grids.forEach((childGrid) => {
        childGrid.setAttribute('style', 'flex: 1;');
    }) 
})

let colorInput = document.querySelector('.color input');

colorInput.addEventListener('input', () => {
    pencilColor = colorInput.value;
})


