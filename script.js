"use strict"
const grid = document.querySelector('.screen');
const containers = document.querySelectorAll('.container');
const input = document.querySelector('.slide');


function createGrid (n) {
    containers.forEach(container => {
        for (let i = 1; i <= n * n; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel')
            pixel.style.cssText = `border: 1px solid black; width: ${calculatePixelSide()}px; height: ${calculatePixelSide()}px;`
            container.appendChild(pixel);
        }
    }) 
    function calculatePixelSide () {
        return Math.round((250/input.value) * 1000) / 1000
    }
}

input.addEventListener('input', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(p => {
        p.remove();
    });
    createGrid(input.value);
})

createGrid(5);


