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
            switch (value) {
                case 'C':
                    currentVal = '';
                    prevVal = '';
                    currentOperation = null;
                    updateDisplay('0');
                    break;
                case '=':
                    // calculate(); add a calculate function
                    break;
                default:
                    if (['+', '-', '*', '/'].includes(value)) {
                        prevVal = currentVal;
                        currentVal = '';
                        currentOperation = value;
                    } else {
                        currentVal += value;
                        updateDisplay(currentVal);
                    }
                    break;
            }
        });
    });
});
