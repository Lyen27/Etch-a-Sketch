"use strict"
const containers = document.querySelectorAll('.container');
const input = document.querySelector('.slide');
let mouseState = false;

function createGrid (n) {
    containers.forEach(container => {
        for (let i = 1; i <= n * n; i++) {
            const pixel = document.createElement('div');
            pixel.style.cssText = `border: 1px solid #cacaca; width: ${calculatePixelSide()}px; height: ${calculatePixelSide()}px;`
            container.appendChild(pixel);
            pixel.addEventListener("mousedown", (e) => {
                if (e.button === 0) {
                    mouseState = true;
                    pixel.style.backgroundColor = "black";
                    e.preventDefault();
                }
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseState === true) {
                    pixel.style.backgroundColor = "black";
                }
            })
            pixel.addEventListener("mouseup", () => {
                mouseState = false;
            })
        }
    }) 
    function calculatePixelSide () {
        return Math.round((250/input.value) * 1000) / 1000
    }
}

input.addEventListener('input', () => {
    const pixels = document.querySelectorAll('.container > *');
    pixels.forEach(p => {
        p.remove();
    });
    createGrid(input.value);
})

createGrid(input.value);


