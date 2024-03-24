document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentOperation = null;
    let currentVal = '';
    let prevVal = '';

    const updateDisplay = (text) => {
        console.log(text);
        display.innerText = text;
    };

    const calculate = () => {
        if (!currentOperation || !prevVal) return;
        const current = parseFloat(currentVal);
        const previous = parseFloat(prevVal);
        let result = '';
        switch (currentOperation) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '*':
                result = previous * current;
                break;
            case '%':
                result = previous % current;
                break;
            case '/':
                result = previous / current;
                break;
            default:
                return;
        }
        console.log(result);
        updateDisplay(result);
        currentVal = result;
        prevVal = '';
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
                    calculate();
                    break;
                default:
                    if (['+', '-', '*', '/', '%'].includes(value)) {
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
