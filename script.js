"use strict"
const containers = document.querySelectorAll('.container');
const input = document.querySelector('.slide');
const rainbow = document.querySelector('.rainbow');
const pencil = document.querySelector('.pencil')
let mouseState = false;
let randomState = false;

window.addEventListener("mouseup", () => {
    mouseState = false;
})

function createGrid (n) {
    containers.forEach(container => {
        for (let i = 1; i <= n * n; i++) {
            const pixel = document.createElement('div');
            pixel.style.cssText = `border: 1px solid #cacaca; width: ${calculatePixelSide()}px; height: ${calculatePixelSide()}px;`
            container.appendChild(pixel);
            pixel.addEventListener("mousedown", (e) => {
                if (e.button === 0) {
                    mouseState = true;
                    if (randomState === true) {
                        pixel.style.backgroundColor = `${randomColor()}`;
                    } else {pixel.style.backgroundColor = 'black'};
                    e.preventDefault();
                }
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseState === true) {
                    if (randomState === true) {
                        pixel.style.backgroundColor = `${randomColor()}`;
                    } else {pixel.style.backgroundColor = 'black'};
                }
            })
        }
    }) 
    
    function calculatePixelSide () {
        return Math.round((250/input.value) * 1000) / 1000
    }
}

input.addEventListener("input", () => {
    const pixels = document.querySelectorAll('.container > *');
    pixels.forEach(p => {
        p.remove();
    });
    createGrid(input.value);
})

rainbow.addEventListener("click", () => {
    randomState = true});

function randomColor() {   //returns a random rgb color code
  function randomNumber() {
    return Math.floor(Math.random() * 256)
  }

  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}    
    
pencil.addEventListener("click", () => {
    randomState = false}); 

createGrid(input.value);


