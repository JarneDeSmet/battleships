"use strict";


let schepen = document.querySelectorAll('.ship');
const destroyer = document.querySelector('#destroyer');
const submarine = document.querySelector('#submarine');
const cruiser = document.querySelector('#cruiser');
const battleship = document.querySelector('#battleship');
const carrier = document.querySelector('#carrier');
let vertical = false;
let placed = false;
let ready = false;
let border = ' 2px solid blue';

const info = document.querySelector('.info');
const player1Field = [];
const player2Field = [];
let playerTurn = 1;
const actionButton = document.querySelector('.action');


let grid = document.querySelectorAll('.cube');
let gridOwn = document.querySelectorAll('.own');
const gridDisplay = document.querySelector('.grid-display');
const field = document.querySelector('.field');
const fieldOwn = document.querySelector('.fieldOwn');
const rotate = document.querySelector('.rotate');


let dragItem = null;

function dragStart() {
    placed = false;
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
        let destroyerCO = [
            {
                name: 'destroyer',
                length: 2,
                beginCO: [0, 1],
                middenCO: [0, 1],
                eindCO: [0, 1],

            }]
        destroyerCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
        this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
        this.style.border = border;
        console.log('check turn: ' + playerTurn);

        if (!vertical) {

            destroyerCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
            destroyerCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 1];

            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = border;

            if (playerTurn === 1) {
                player1Field.push(destroyerCO);
            } else if (playerTurn === 2) {
                player2Field.push(destroyerCO);
            }


        } else if (vertical) {
            destroyerCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
            destroyerCO.eindCO = [this.parentElement.rowIndex + 1, this.cellIndex];

            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = border;
            if (playerTurn === 1) {
                player1Field.push(destroyerCO);
            } else if (playerTurn === 2) {
                player2Field.push(destroyerCO);
            }

        }
        if (this.cellIndex >= 0) {
            placed = true;
        }
    } else if (dragItem === submarine) {

        let submarineCO = [
            {
                name: 'submarine',
                length: 3,
                beginCO: [0, 1],
                middenCO: [0, 1],
                eindCO: [0, 1],

            }]
        submarineCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
        this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
        this.style.border = border;
        if (!vertical) {

            submarineCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
            submarineCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 2];
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = border;
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.border = border;
            if (playerTurn === 1) {
                player1Field.push(submarineCO);
            } else if (playerTurn === 2) {
                player2Field.push(submarineCO);
            }

        } else if (vertical) {
            submarineCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
            submarineCO.eindCO = [this.parentElement.rowIndex + 2, this.cellIndex];

            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = border;
            field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.border = border;
            if (playerTurn === 1) {
                player1Field.push(submarineCO);
            } else if (playerTurn === 2) {
                player2Field.push(submarineCO);
            }

        }
        if (this.cellIndex >= 0) {
            placed = true;
        }
    } else if (dragItem === cruiser) {
        let cruiserCO = [
            {
                name: 'cruiser',
                length: 3,
                beginCO: [0, 1],
                middenCO: [0, 1],
                eindCO: [0, 1],

            }]
        cruiserCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
        this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
        this.style.border = ' 2px solid blue';
        if (!vertical) {

            cruiserCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
            cruiserCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 2];

            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = border;
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.border = border;
            if (playerTurn === 1) {
                player1Field.push(cruiserCO);
            } else if (playerTurn === 2) {
                player2Field.push(cruiserCO);
            }

        } else if (vertical) {
            cruiserCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
            cruiserCO.eindCO = [this.parentElement.rowIndex + 2, this.cellIndex];

            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = border;
            field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.border = border;

            if (playerTurn === 1) {
                player1Field.push(cruiserCO);
            } else if (playerTurn === 2) {
                player2Field.push(cruiserCO);
            }
        }
        if (this.cellIndex >= 0) {
            placed = true;
        }
    } else if (dragItem === battleship) {
        let battleshipCO = [
            {
                name: 'battleship',
                length: 4,
                beginCO: [0, 1],
                middenCO: [0, 1],
                middenCO2: [0, 1],
                eindCO: [0, 1],

            }]

        battleshipCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
        this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
        this.style.border = ' 2px solid blue';
        if (!vertical) {

            battleshipCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
            battleshipCO.middenCO2 = [this.parentElement.rowIndex, this.cellIndex + 2];
            battleshipCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 3];

            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = border;
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.border = ' 2px solid blue';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 3].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 3].style.border = border;
            if (playerTurn === 1) {
                player1Field.push(battleshipCO);
            } else if (playerTurn === 2) {
                player2Field.push(battleshipCO);
            }

        } else if (vertical) {
            battleshipCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
            battleshipCO.middenCO2 = [this.parentElement.rowIndex + 2, this.cellIndex];
            battleshipCO.eindCO = [this.parentElement.rowIndex + 3, this.cellIndex];

            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = border;
            field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.border = border;
            field.rows[this.parentElement.rowIndex + 3].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 3].cells[this.cellIndex].style.border = border;

            if (playerTurn === 1) {
                player1Field.push(battleshipCO);
            } else if (playerTurn === 2) {
                player2Field.push(battleshipCO);
            }
        }
        if (this.cellIndex >= 0) {
            placed = true;
        }
    } else if (dragItem === carrier) {
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
        carrierCO.beginCO = [this.parentElement.rowIndex, this.cellIndex];
        this.style.backgroundColor = 'rgba(0, 0, 0, 10%)';
        this.style.border = ' 2px solid blue';
        if (!vertical) {

            carrierCO.middenCO = [this.parentElement.rowIndex, this.cellIndex + 1];
            carrierCO.middenCO2 = [this.parentElement.rowIndex, this.cellIndex + 2];
            carrierCO.middenCO3 = [this.parentElement.rowIndex, this.cellIndex + 3];
            carrierCO.eindCO = [this.parentElement.rowIndex, this.cellIndex + 4];

            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 1].style.border = border;
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 2].style.border = border;
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 3].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 3].style.border = border;
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 4].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex].cells[this.cellIndex + 4].style.border = border;
            if (playerTurn === 1) {
                player1Field.push(carrierCO);
            } else if (playerTurn === 2) {
                player2Field.push(carrierCO);
            }

            placed = true;
        } else if (vertical) {
            carrierCO.middenCO = [this.parentElement.rowIndex + 1, this.cellIndex];
            carrierCO.middenCO2 = [this.parentElement.rowIndex + 2, this.cellIndex];
            carrierCO.middenCO3 = [this.parentElement.rowIndex + 3, this.cellIndex];
            carrierCO.eindCO = [this.parentElement.rowIndex + 4, this.cellIndex];

            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 1].cells[this.cellIndex].style.border = border;
            field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 2].cells[this.cellIndex].style.border = border;
            field.rows[this.parentElement.rowIndex + 3].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 3].cells[this.cellIndex].style.border = border;
            field.rows[this.parentElement.rowIndex + 4].cells[this.cellIndex].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            field.rows[this.parentElement.rowIndex + 4].cells[this.cellIndex].style.border = border;

            if (playerTurn === 1) {
                player1Field.push(carrierCO);
            } else if (playerTurn === 2) {
                player2Field.push(carrierCO);
            }
        }
        if (this.cellIndex >= 0) {
            placed = true;
        }
    }
    console.log(player1Field);
    console.log(player2Field);


}


function resetField() {
    grid.forEach(cell => {
        cell.style.background = 'none';
        cell.style.border = '1px solid #000';
    })

}


function resetSchepen() {
    schepen.forEach(schip => {
        schip.classList.remove('invisible')
    })

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

if (!ready) {
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
}


actionButton.addEventListener("click", function () {
    if (player1Field.length < 5) {
        console.log(player1Field.length)
        info.innerHTML = 'Player 1 choose your boats';
    } else if (player1Field.length === 5 && player2Field.length < 5) {
        playerTurn = 2;
        resetSchepen();
        resetField();

        info.innerHTML = 'Player 2 choose your boats';
    }

    if (player1Field.length === 5 && player2Field.length === 5) {

        ready = true;
        playerTurn = 1;
        info.innerHTML = 'Player 1 take your first shot';
        setOwnfield();
        resetField();

        if (ready) {
            /*            field.classList.add('targets')*/
            schepen.forEach(item => {
                item.removeEventListener('dragstart', dragStart);
                item.removeEventListener('dragend', dragEnd);
            });
            grid.forEach(cube => {
                cube.removeEventListener('dragover', dragOver);
                cube.removeEventListener('dragenter', dragEnter);
                cube.removeEventListener('dragleave', dragLeave);
                cube.removeEventListener('drop', dragDrop);
                cube.classList.add('targets');
                cube.addEventListener('mouseover', function () {
                    cube.style.background = 'red';
                })
                cube.addEventListener('mouseleave', function () {
                    cube.style.background = 'none';
                })


                cube.addEventListener('click', function () {

                    info.innerHTML = `Player ${playerTurn} take your first shot`;
                    checkHit(this);
                    console.log(playerTurn)
                    resetOwnField();

                    if (playerTurn === 1) {
                         setOwnfield();
                         playerTurn = 2;
                     } else if (playerTurn === 2) {
                         setOwnfield();
                         playerTurn = 1;
                     }

                })
            });


        }
    }


});

function setOwnfield() {

    if (playerTurn === 1) {
        player1Field.forEach(boot => {
            fieldOwn.rows[boot.beginCO[0]].cells[boot.beginCO[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            fieldOwn.rows[boot.beginCO[0]].cells[boot.beginCO[1]].style.border = '2px solid blue';

            fieldOwn.rows[boot.middenCO[0]].cells[boot.middenCO[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            fieldOwn.rows[boot.middenCO[0]].cells[boot.middenCO[1]].style.border = '2px solid blue';

            if (boot[0].length > 3) {

                fieldOwn.rows[boot.middenCO2[0]].cells[boot.middenCO2[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                fieldOwn.rows[boot.middenCO2[0]].cells[boot.middenCO2[1]].style.border = '2px solid blue';

            }
            if (boot[0].length > 4) {
                fieldOwn.rows[boot.middenCO3[0]].cells[boot.middenCO3[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                fieldOwn.rows[boot.middenCO3[0]].cells[boot.middenCO3[1]].style.border = '2px solid blue';
            }
            fieldOwn.rows[boot.eindCO[0]].cells[boot.eindCO[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            fieldOwn.rows[boot.eindCO[0]].cells[boot.eindCO[1]].style.border = '2px solid blue';


        })


    } else {
        player2Field.forEach(boot => {

            fieldOwn.rows[boot.beginCO[0]].cells[boot.beginCO[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            fieldOwn.rows[boot.beginCO[0]].cells[boot.beginCO[1]].style.border = '2px solid blue';

            fieldOwn.rows[boot.middenCO[0]].cells[boot.middenCO[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            fieldOwn.rows[boot.middenCO[0]].cells[boot.middenCO[1]].style.border = '2px solid blue';

            if (boot[0].length > 3) {

                fieldOwn.rows[boot.middenCO2[0]].cells[boot.middenCO2[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                fieldOwn.rows[boot.middenCO2[0]].cells[boot.middenCO2[1]].style.border = '2px solid blue';

            }
            if (boot[0].length > 4) {
                fieldOwn.rows[boot.middenCO3[0]].cells[boot.middenCO3[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
                fieldOwn.rows[boot.middenCO3[0]].cells[boot.middenCO3[1]].style.border = '2px solid blue';
            }
            fieldOwn.rows[boot.eindCO[0]].cells[boot.eindCO[1]].style.backgroundColor = 'rgba(0, 0, 0, 10%)';
            fieldOwn.rows[boot.eindCO[0]].cells[boot.eindCO[1]].style.border = '2px solid blue';


        })

    }

}

function resetOwnField() {
    gridOwn.forEach(cell => {
        cell.style.background = 'none';
        cell.style.border = '1px solid #000';
    })

}

function checkHit(cube) {
    let hit = false;
    let field = [];
    if (playerTurn === 1) {
        field = player2Field;
    } else if (playerTurn === 2) {
        field = player1Field;
    }
    field.forEach(boot => {
        if (boot.beginCO[0] + "," + boot.beginCO[1] === cube.parentElement.rowIndex + ',' + cube.cellIndex) {
            console.log('hit begin')
            hit = true;
        } else if (boot.eindCO[0] + "," + boot.eindCO[1] === cube.parentElement.rowIndex + ',' + cube.cellIndex) {
            console.log('hit eind')
            hit = true;
        } else if (boot.middenCO[0] + "," + boot.middenCO[1] === cube.parentElement.rowIndex + ',' + cube.cellIndex) {
            console.log('hit 2e plaats')
            hit = true;
        } else if (boot[0].length > 3) {
            if (boot.middenCO2[0] + "," + boot.middenCO2[1] === cube.parentElement.rowIndex + ',' + cube.cellIndex) {
                console.log('hit 3e plaats')
                hit = true;
            } else if (boot[0].length > 4) {
                if (boot.middenCO3[0] + "," + boot.middenCO3[1] === cube.parentElement.rowIndex + ',' + cube.cellIndex) {
                    console.log('hit 4e plaats')
                    hit = true;
                }
            } else if (!hit) {
                console.log('misssss')
            }
        }


    })

}


/*function gameLoop() {



    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);*/

