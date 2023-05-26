let currentContent = document.querySelector('#content');
let decrementer = document.querySelector('#decrement');
let incrementer = document.querySelector('#increment');

incrementer.addEventListener('click', () => {
    let value = parseInt(currentContent.textContent);
    value++;
    currentContent.textContent = value;
});

decrementer.addEventListener('click', () => {
    let value = parseInt(currentContent.textContent);
    value--;
    currentContent.textContent = value;
});