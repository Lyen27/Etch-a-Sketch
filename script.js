"use strict"
const grid = document.querySelector('.screen')
const input = document.querySelector('.slide');
const rainbow = document.querySelector('.rainbow');
const pencil = document.querySelector('.pencil');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.reset');
const opacity = document.querySelector('.opacity');
const colorPicker = document.querySelector('.picker');
let mouseState = false;
let randomState = false;
let deleteState = false;

const pixelState = [];

window.addEventListener("mouseup", () => {
    mouseState = false;
})
function createGrid(n) {
    for (let i = 1; i <= 2 * n; i++) {
        const column = document.createElement('div');
        column.style.cssText = `width: ${(calculatePixelSide() / 2).toFixed(4)}%`;
        grid.appendChild(column);
    }

    const columns = document.querySelectorAll('.screen > *')
    columns.forEach((item,index) => {
        if (pixelState[index] === undefined) {
            pixelState[index] = [];
        };

        for(let i = 1; i<=n; i++) {
            if (pixelState[index][i] === undefined) {
                pixelState[index][i] = {
                    color: '#e6ffff',
                    opacity: '1'
                }
            }}

        for (let i = 1; i <= n; i++) {
            const pixel = document.createElement('div');
            pixel.style.cssText = `background-color: ${pixelState[index][i].color}; opacity: ${pixelState[index][i].opacity}; border: 1px solid #cacaca; width: 100%; height: ${calculatePixelSide()}%;`
            item.appendChild(pixel);
            pixel.addEventListener("mousedown", (e) => {
                if (e.button === 0) {
                    mouseState = true;
                    if (randomState === true) {
                        pixel.style.backgroundColor = `${randomColor()}`;
                        pixel.style.opacity = `${opacity.value/100}`;
                        pixelState[index][i].color = `${pixel.style.backgroundColor}`;
                        pixelState[index][i].opacity = `${opacity.value/100}`;
                    } else if (deleteState === true) {
                        pixel.style.backgroundColor = '#e6ffff';
                        pixel.style.opacity = '1'
                        pixelState[index][i].color = '#e6ffff';
                        pixelState[index][i].opacity = '1';
                    }
                    else {
                        pixel.style.backgroundColor = `${colorPicker.value}`;
                        pixel.style.opacity = `${opacity.value/100}`;
                        pixelState[index][i].color = `${colorPicker.value}`;
                        pixelState[index][i].opacity = `${opacity.value/100}`;

                    };
                    e.preventDefault();
                }
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseState === true) {
                    if (randomState === true) {
                        pixel.style.backgroundColor = `${randomColor()}`;
                        pixel.style.opacity = `${opacity.value/100}`;
                        pixelState[index][i].color = `${pixel.style.backgroundColor}`;
                        pixelState[index][i].opacity = `${opacity.value/100}`;
                    } else if (deleteState === true) {
                        pixel.style.backgroundColor = '#e6ffff';
                        pixel.style.opacity = '1'
                        pixelState[index][i].color = '#e6ffff';
                        pixelState[index][i].opacity = '1';
                    }
                    else {
                        pixel.style.backgroundColor = `${colorPicker.value}`;
                        pixel.style.opacity = `${opacity.value/100}`;
                        pixelState[index][i].color = `${colorPicker.value}`;
                        pixelState[index][i].opacity = `${opacity.value/100}`;

                    };
                }
            })
            
        }
    })


    function calculatePixelSide() {
        return (100 / input.value).toFixed(3);
    }

}

input.addEventListener("input", () => {
    const pixels = document.querySelectorAll('.screen > *');
    pixels.forEach(p => {
        p.remove();
    });
    createGrid(input.value);
})

rainbow.addEventListener("click", () => {
    randomState = true;
    deleteState = false
});

function randomColor() {   //returns a random rgb color code
    function randomNumber() {
        return Math.floor(Math.random() * 256)
    }

    return `rgb(${randomNumber()} ${randomNumber()} ${randomNumber()})`
}

pencil.addEventListener("click", () => {
    randomState = false;
    deleteState = false
});

eraser.addEventListener("click", () => {
    deleteState = true;
    randomState = false
});

reset.addEventListener('click', () => { //reset button
    const pixels = document.querySelectorAll('.screen div');
    pixels.forEach(p => {
        p.style.backgroundColor = '#e6ffff';
        p.style.opacity = "1";
    });
    pixelState.forEach((item) => {
        item.forEach((i) => {
            i.color = '#e6ffff';
            i.opacity = '1';
        })
    })
})

createGrid(input.value);


