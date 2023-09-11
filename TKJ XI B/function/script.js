let displayValue = '';

function calculate(button) {
    const value = button.innerText;

    if (value === '=') {
        try {
            displayValue = eval(displayValue);
        } catch (error) {
            displayValue = 'Error';
        }
    } else if (value === 'C') {
        displayValue = '';
    } else {
        displayValue += value;
    }

    document.getElementById('display').value = displayValue;
}
