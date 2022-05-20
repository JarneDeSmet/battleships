"use strict";

(function () {
    const schepen = document.querySelectorAll('.ship');
    const destroyer = document.querySelector('#destroyer');
    const submarine = document.querySelector('#submarine');
    const cruiser = document.querySelector('#cruiser');
    const battleship = document.querySelector('#battleship');
    const carrier = document.querySelector('#carrier');
    let vertical = false;
    let placed = false;
    const fieldArray = [];
    let destroyerCO = [
        {
            name: 'destroyer',
            length: 2,
            beginCO: [0, 1],
            middenCO: [0, 1],
            eindCO: [0, 1],

        }]
    let submarineCO = [
        {
            name: 'submarine',
            length: 3,
            beginCO: [0, 1],
            middenCO: [0, 1],
            eindCO: [0, 1],

        }]
    let cruiserCO = [
        {
            name: 'cruiser',
            length: 3,
            beginCO: [0, 1],
            middenCO: [0, 1],
            eindCO: [0, 1],

        }]
    let battleshipCO = [
        {
            name: 'battleship',
            length: 4,
            beginCO: [0, 1],
            middenCO: [0, 1],
            middenCO2: [0, 1],
            eindCO: [0, 1],

        }]
    let carrierCO = [
        {
            name: 'carrier',
            length: 5,
            beginCO: [0, 1],
            middenCO: [0, 1],
            middenCO2: [0, 1],
            middenCO3: [0, 1],
            eindCO: [0, 1],

        }]


    const grid = document.querySelectorAll('.cube');
    const gridDisplay = document.querySelector('.grid-display');
    const field = document.querySelector('.field');
    const rotate = document.querySelector('.rotate');

    schepen.forEach(item => {
        item.addEventListener('dragstart', dragStart)
        item.addEventListener('dragend', dragEnd)
    });
    grid.forEach(cube => {
        cube.addEventListener('dragover', dragOver);
        cube.addEventListener('dragenter', dragEnter);
        cube.addEventListener('dragleave', dragLeave);
        cube.addEventListener('drop', dragDrop);
    });


    let dragItem = null;

    function dragStart() {
        console.log('drag started');
        dragItem = this;
        setTimeout(() => this.classList.add('invisible'), 0)
    }

    function dragEnd() {
        if (!placed) {
            setTimeout(() => this.classList.remove('invisible'), 0)
        }
        console.log('drag ended');
        dragItem = null;
    }


    function dragOver(e) {
        e.preventDefault()
        this.classList.toggle('hover');
        console.log('drag over');
    }

    function dragEnter() {
        console.log('drag entered');
    }

    function dragLeave() {
        console.log('drag left');
    }

    function dragDrop() {

        console.log('drag dropped');


        if (dragItem === destroyer) {
            destroyerCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
            this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            this.style.border = ' 2px solid blue';
            if (!vertical) {

                destroyerCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
                destroyerCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 1];

                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = ' 2px solid blue';

                fieldArray.push(destroyerCO);
            } else if (vertical) {
                destroyerCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
                destroyerCO.eindCO = [this.parentElement.rowIndex + 1, this.cellIndex];

                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = ' 2px solid blue';

                fieldArray.push(destroyerCO);
            }
            if (this.cellIndex >= 0) {
                placed = true;
            }
        }
        else if (dragItem === submarine) {
            submarineCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
            this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            this.style.border = ' 2px solid blue';
            if (!vertical) {

                submarineCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
                submarineCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 2];

                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.border = ' 2px solid blue';

                fieldArray.push(submarineCO);
            } else if (vertical) {
                submarineCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
                submarineCO.eindCO = [this.parentElement.rowIndex + 2, this.cellIndex];

                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.border = ' 2px solid blue';

                fieldArray.push(submarineCO);
            }
            if (this.cellIndex >= 0) {
                placed = true;
            }
        }
        else if (dragItem === cruiser) {
            cruiserCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
            this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            this.style.border = ' 2px solid blue';
            if (!vertical) {

                cruiserCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
                cruiserCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 2];

                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.border = ' 2px solid blue';

                fieldArray.push(cruiserCO);
            } else if (vertical) {
                cruiserCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
                cruiserCO.eindCO = [this.parentElement.rowIndex + 2, this.cellIndex];

                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.border = ' 2px solid blue';

                fieldArray.push(cruiserCO);
            }
            if (this.cellIndex >= 0) {
                placed = true;
            }
        }
        else if (dragItem === battleship) {
            battleshipCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
            this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            this.style.border = ' 2px solid blue';
            if (!vertical) {

                battleshipCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
                battleshipCO.middenCO2 = [this.parentElement.rowIndex, this.cellIndex + 2];
                battleshipCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 3];

                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 3].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 3].style.border = ' 2px solid blue';

                fieldArray.push(battleshipCO);
            } else if (vertical) {
                battleshipCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
                battleshipCO.middenCO2 = [this.parentElement.rowIndex + 2, this.cellIndex];
                battleshipCO.eindCO = [this.parentElement.rowIndex + 3, this.cellIndex];

                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex + 3].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 3].cells[this.cellIndex].style.border = ' 2px solid blue';

                fieldArray.push(battleshipCO);
            }
            if (this.cellIndex >= 0) {
                placed = true;
            }
        }
        else if (dragItem === carrier) {
            carrierCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
            this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            this.style.border = ' 2px solid blue';
            if (!vertical) {

                carrierCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
                carrierCO.middenCO2 = [this.parentElement.rowIndex, this.cellIndex + 2];
                carrierCO.middenCO6 = [this.parentElement.rowIndex, this.cellIndex + 3];
                carrierCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 4];

                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 3].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 3].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 4].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 4].style.border = ' 2px solid blue';

                fieldArray.push(carrierCO);
                placed = true;
            } else if (vertical) {
                carrierCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
                carrierCO.middenCO2 = [this.parentElement.rowIndex + 2, this.cellIndex];
                carrierCO.middenCO3 = [this.parentElement.rowIndex + 3, this.cellIndex];
                carrierCO.eindCO = [this.parentElement.rowIndex + 4, this.cellIndex];

                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex + 3].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 3].cells[this.cellIndex].style.border = ' 2px solid blue';
                field.rows[this.parentElement.rowIndex + 4].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                field.rows[this.parentElement.rowIndex + 4].cells[this.cellIndex].style.border = ' 2px solid blue';

                fieldArray.push(carrierCO);
            }
            if (this.cellIndex >= 0) {
                placed = true;
            }
        }
        console.log(fieldArray);


    }

    rotate.addEventListener("click", function () {
        if (vertical) {
            gridDisplay.style.display = 'revert';
            if (gridDisplay.contains(destroyer)) {
                destroyer.classList.add('destroyer-container');
                destroyer.classList.remove('destroyer-container-vertical');
            }

            if (gridDisplay.contains(submarine)) {
                submarine.classList.add('submarine-container');
                submarine.classList.remove('submarine-container-vertical');
            }
            if (gridDisplay.contains(cruiser)) {
                cruiser.classList.add("cruiser-container");
                cruiser.classList.remove('cruiser-container-vertical');
            }
            if (gridDisplay.contains(battleship)) {
                battleship.classList.add('battleship-container');
                battleship.classList.remove('battleship-container-vertical');
            }
            if (gridDisplay.contains(carrier)) {
                carrier.classList.add('carrier-container');
                carrier.classList.remove('carrier-container-vertical');
            }
            vertical = false;

        } else {
            gridDisplay.style.display = 'flex';
            if (gridDisplay.contains(destroyer)) {
                destroyer.classList.remove('destroyer-container');
                destroyer.classList.add('destroyer-container-vertical');
            }

            if (gridDisplay.contains(submarine)) {
                submarine.classList.remove('submarine-container');
                submarine.classList.add('submarine-container-vertical');
            }
            if (gridDisplay.contains(cruiser)) {
                cruiser.classList.remove("cruiser-container");
                cruiser.classList.add('cruiser-container-vertical');
            }
            if (gridDisplay.contains(battleship)) {
                battleship.classList.remove('battleship-container');
                battleship.classList.add('battleship-container-vertical');
            }
            if (gridDisplay.contains(carrier)) {
                carrier.classList.remove('carrier-container');
                carrier.classList.add('carrier-container-vertical');
            }
            vertical = true;

        }


    });


})();