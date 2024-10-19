"use strict"
const containers = document.querySelectorAll('.container');
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
                    } else if (deleteState === true) {
                      pixel.style.backgroundColor = 'white';
                      pixel.style.opacity = '1'}
                      else {
                      pixel.style.cssText += `background-color:${colorPicker.value}; opacity: ${opacity.value}%;`};
                    e.preventDefault();
                }
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseState === true) {
                    if (randomState === true) {
                        pixel.style.backgroundColor = `${randomColor()}`;
                    } else if (deleteState === true) {
                      pixel.style.backgroundColor = 'white';
                      pixel.style.opacity = '1'}
                      else {
                      pixel.style.cssText += `background-color: ${colorPicker.value}; opacity: ${opacity.value}%;`};
                }
            })
        }
    }) 
    
    function calculatePixelSide () {
        return (250/input.value).toFixed(3);
    }
}

input.addEventListener("input", () => {
    const pixels = document.querySelectorAll('.container > *');
    pixels.forEach(p => {
        p.remove();
    });
    createGrid(input.value);
    console.log(input.value)
})

rainbow.addEventListener("click", () => {
    randomState = true;
    deleteState = false});

function randomColor() {   //returns a random rgb color code
  function randomNumber() {
    return Math.floor(Math.random() * 256)
  }

  return `rgb(${randomNumber()} ${randomNumber()} ${randomNumber()} /${opacity.value}%)`
}    
    
pencil.addEventListener("click", () => {
    randomState = false;
    deleteState = false}); 

eraser.addEventListener("click", () => {
    deleteState = true;
    randomState = false});

reset.addEventListener('click', () => { //reset button
    const pixels = document.querySelectorAll('.container > *');
    pixels.forEach(p => {
        p.style.backgroundColor = 'white';
        p.style.opacity = "1";
    });
}) 

createGrid(input.value);
console.log(colorPicker.value)


