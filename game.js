const gridContainer = document.getElementById('grid-container');

class cell {
    constructor (_color, _shade, _state, _number) {
        this.color = _color;
        this.shade = _shade;
        this.state = _state;
        this.number = _number;
    }

}

function rangeCells(size) {
    gridContainer.style.gridTemplateColumns = 'repeat('+size+', 1fr)';
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    for(let i= 0; i != size*size; i++) {
        const block = document.createElement("block");
        block.setAttribute('class', 'grid-cell');
        block.setAttribute('onclick', 'paintCells(this.id, 1)');
        block.setAttribute('id', [i]);
        gridContainer.appendChild(block);
    }
}

function buildCells() {
    for(let i = 0; i != 256; i++){
        var block = document.createElement("block");
        block.setAttribute('class', 'grid-cell');
        block.setAttribute('onclick', 'paintCells(this.id, 1)');
        block.setAttribute('id', [i]);
        gridContainer.appendChild(block);
    }
}

function RGB () {
    color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
}

function paintCells(id, tool) {
    switch (tool) {
        case 1:
        gridContainer.childNodes[id].setAttribute('style', 'background-color: black');
    }
}