document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentOperation = null;
    let currentVal = '';
    let prevVal = '';

    const updateDisplay = (text) => {
        console.log(text);
        display.innerText = text;
    };

    document.querySelectorAll('.Calculator-button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            console.log(value);
        });
    });
});
