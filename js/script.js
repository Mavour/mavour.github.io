const buttonLoad = document.querySelector(".button-group .load");
const buttonYesQuest = document.querySelector(".button-group .yes-question");
const buttonNopeQuest = document.querySelector(".button-group .nope-question");
const buttonNext = document.querySelector(".button-group .nexts");
const buttonRepeat = document.querySelector(".button-group .repeat");
const loading = document.querySelector(".loading");
const question = document.querySelector(".question");
const resultYes = document.querySelector(".result-yes");
const resultNope = document.querySelector(".result-nope");
const giveFlower = document.querySelector(".give-flower");


buttonLoad.addEventListener('click', function handleClick() {
    loading.classList.add('hide');
    question.classList.remove('hide');
  });
buttonYesQuest.addEventListener('click', function handleClick() {
    question.classList.add('hide');
    resultYes.classList.remove('hide');
  });
buttonNopeQuest.addEventListener('click', function handleClick() {
    question.classList.add('hide');
    resultNope.classList.remove('hide');
  });
buttonRepeat.addEventListener('click', function handleClick() {
    window.location.reload();
});
buttonNext.addEventListener('click', function handleClick() {
    resultYes.classList.add('hide');
    giveFlower.classList.remove('hide');
    });