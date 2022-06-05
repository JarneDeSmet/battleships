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
const popUp = document.querySelector('.popUp');
const player1Field = [];
let player1Shots = {
    shots: [],
    hits: [],
    misses: [],
    totalHits: 0
};
const player2Field = [];
let player2Shots = {
    shots: [],
    hits: [],
    misses: [],
    totalHits: 0
};

let playerTurn = 1;

const actionButton = document.querySelector('.action');
const readyButton = document.querySelector('#ready');


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

function resetOwnField() {
    gridOwn.forEach(cell => {
        cell.style.background = 'none';
        cell.style.border = '1px solid #000';
    })

}

function resetSchepen() {
    schepen.forEach(schip => {
        schip.classList.remove('invisible')
    })

}

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

function setHitfield() {
    if (playerTurn === 1) {
        player1Shots.hits.forEach(hit => {
            field.rows[hit[0]].cells[hit[1]].style.backgroundColor = 'rgba(255, 0, 0, 70%)';

        })
        player1Shots.misses.forEach(mis => {
            field.rows[mis[0]].cells[mis[1]].style.backgroundColor = 'rgba(0, 0, 0, 60%)';

        })
    } else {

        player2Shots.hits.forEach(hit => {
            field.rows[hit[0]].cells[hit[1]].style.backgroundColor = 'rgba(255, 0, 0, 70%)';

        })
        player2Shots.misses.forEach(mis => {
            field.rows[mis[0]].cells[mis[1]].style.backgroundColor = 'rgba(0, 0, 0, 60%)';

        })

    }
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
            if (playerTurn === 1) {
                player1Shots.hits.push(boot.beginCO);
                player1Shots.shots.push(boot.beginCO);
                player1Shots.totalHits++;
            } else if (playerTurn === 2) {
                player2Shots.hits.push(boot.beginCO);
                player2Shots.shots.push(boot.beginCO);
                player2Shots.totalHits++;
            }

            console.log('hit begin')
            info.innerHTML = 'HIT!';
            hit = true;
        } else if (boot.eindCO[0] + "," + boot.eindCO[1] === cube.parentElement.rowIndex + ',' + cube.cellIndex) {
            if (playerTurn === 1) {
                player1Shots.hits.push(boot.eindCO);
                player1Shots.shots.push(boot.eindCO);
                player1Shots.totalHits++;
            } else if (playerTurn === 2) {
                player2Shots.hits.push(boot.eindCO);
                player2Shots.shots.push(boot.eindCO);
                player2Shots.totalHits++;
            }
            console.log('hit eind')
            info.innerHTML = 'HIT!';
            hit = true;
        } else if (boot.middenCO[0] + "," + boot.middenCO[1] === cube.parentElement.rowIndex + ',' + cube.cellIndex) {
            if (playerTurn === 1) {
                player1Shots.hits.push(boot.middenCO);
                player1Shots.shots.push(boot.middenCO);
                player1Shots.totalHits++;
            } else if (playerTurn === 2) {
                player2Shots.hits.push(boot.middenCO);
                player2Shots.shots.push(boot.middenCO);
                player2Shots.totalHits++;
            }
            console.log('hit 2e plaats')
            info.innerHTML = 'HIT!';
            hit = true;
        } else if (boot[0].length > 3) {
            if (boot.middenCO2[0] + "," + boot.middenCO2[1] === cube.parentElement.rowIndex + ',' + cube.cellIndex) {
                if (playerTurn === 1) {
                    player1Shots.hits.push(boot.middenCO2);
                    player1Shots.shots.push(boot.middenCO2);
                    player1Shots.totalHits++;
                } else if (playerTurn === 2) {
                    player2Shots.hits.push(boot.middenCO2);
                    player2Shots.shots.push(boot.middenCO2);
                    player2Shots.totalHits++;
                }
                console.log('hit 3e plaats')
                info.innerHTML = 'HIT!';
                hit = true;
            } else if (boot[0].length > 4) {
                if (boot.middenCO3[0] + "," + boot.middenCO3[1] === cube.parentElement.rowIndex + ',' + cube.cellIndex) {
                    if (playerTurn === 1) {
                        player1Shots.hits.push(boot.middenCO3);
                        player1Shots.shots.push(boot.middenCO3);
                        player1Shots.totalHits++;
                    } else if (playerTurn === 2) {
                        player2Shots.hits.push(boot.middenCO3);
                        player2Shots.shots.push(boot.middenCO3);
                        player2Shots.totalHits++;
                    }
                    console.log('hit 4e plaats')
                    info.innerHTML = 'HIT!';
                    hit = true;
                }
            }
        }

    })
    if (!hit) {
        console.log('misssss')
        info.innerHTML = 'MIS!';
        if (playerTurn === 1) {
            player1Shots.misses.push([cube.parentElement.rowIndex, cube.cellIndex]);
            player1Shots.shots.push([cube.parentElement.rowIndex, cube.cellIndex]);

        } else if (playerTurn === 2) {
            player2Shots.misses.push([cube.parentElement.rowIndex, cube.cellIndex]);
            player2Shots.shots.push([cube.parentElement.rowIndex, cube.cellIndex]);

        }
    }

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
        actionButton.style.display = 'none';
        ready = true;
        playerTurn = 1;
        info.innerHTML = 'Player 1 take your first shot';
        resetField();

        if (ready) {
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
                /*    cube.addEventListener('mouseover', function () {
                        cube.style.background = 'red';
                    })
                    cube.addEventListener('mouseleave', function () {

                            cube.style.background = 'none';



                    })*/
                cube.addEventListener('click', function () {


                    //resetField()
                    let alreadyHit;
                    if (playerTurn === 1) {
                        player1Shots.shots.forEach(shot => {
                            if (shot[0] === cube.parentElement.rowIndex && shot[1] === cube.cellIndex) {
                                info.innerHTML = `You already hit this spot`;
                                alreadyHit = true;
                                setHitfield()
                            }
                        })
                    } else if (playerTurn === 2) {
                        player2Shots.shots.forEach(shot => {
                            if (shot[0] === cube.parentElement.rowIndex && shot[1] === cube.cellIndex) {
                                info.innerHTML = `You already hit this spot`;
                                alreadyHit = true;
                                setHitfield()
                            }
                        })
                    }

                    if (!alreadyHit) {
                        checkHit(this);
                        setHitfield()
                        if (player1Shots.totalHits === 17 || player2Shots.totalHits === 17) {
                            setHitfield()
                            info.innerHTML = `Player ${playerTurn} has won the battle`;
                            setTimeout(function () {
                                location.href = `../endScreen/?winner=${playerTurn}`;
                            }, 500);

                        } else {
                            if (playerTurn === 1) {
                                playerTurn = 2;
                                resetOwnField()
                            } else if (playerTurn === 2) {
                                playerTurn = 1;
                                resetOwnField()
                            }
                            setTimeout(function () {
                                popUp.style.display = 'flex';
                            }, 300);

                            readyButton.addEventListener('click', function () {
                                popUp.style.display = 'none';
                                resetField()
                                setOwnfield()
                                setHitfield()
                                info.innerHTML = `Player ${playerTurn} take your shot`;
                            });


                        }

                    }
                })


            });


        }
    }


});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

const hamb = document.querySelectorAll(".nav-link");
hamb.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))




