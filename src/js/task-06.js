const correctInputEl = document.querySelector(`#validation-input`);
correctInputEl.addEventListener(`blur`, () => {
    const inputLength = correctInputEl.dataset.length;

    if (inputLength >= 6) {
        correctInputEl.classList.add(`valid`);
    } else {
        correctInputEl.classList.remove(`invalid`);
    };
   
});