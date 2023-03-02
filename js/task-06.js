const validationInput = document.querySelector(`#validation-input`);

validationInput.addEventListener(`blur`, (evt) => {
    evt.target.classList.add("invalid");
    if (evt.target.value.length === Number(evt.target.dataset.length)) {
        evt.target.classList.replace("invalid", "valid");
    }
});