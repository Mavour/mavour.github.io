//valentine section
const buttonWhat = document.querySelector(".button-group .whats");
const buttonValentine = document.querySelector(".button-group .yes-valentine");
const opening = document.querySelector(".opening");
const valentine = document.querySelector(".valentine");
const closing = document.querySelector(".closing");

//valentine section
buttonWhat.addEventListener('click', function handleClick() {
    opening.classList.add('hide');
    valentine.classList.remove('hide');
    });
buttonValentine.addEventListener('click', function handleClick() {
    valentine.classList.add('hide');
    closing.classList.remove('hide');
    });