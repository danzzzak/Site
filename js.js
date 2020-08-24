/*jshint esversion: 6 */
let images = document.querySelectorAll('.slider img');
let current = 0;

function slider1() {
    for (let i = 0; i < images.lenght; i++) {
      images[i].classList.add('opacity0');
    }
}

document.querySelector('.slider').onclick = slider1;
