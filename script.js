const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // more code here to make it do something
        // have to add data-action attribute in the html to make this work.
        
        const key= e.target;
        const action =  key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        

        if (!action) {
            console.log('number keys');
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' 
        ) {
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            console.log('Operator pressed!');
            key.classList.add('is-depressed');
            // add custom attribute
            calculator.dataset.previousKeyType = 'operator';
        }
        if (action === 'decimal') {
            console.log('decimal key was pressed');
            display.textContent = displayedNum + '.';
        }
        if (action === 'clear') {
            console.log('clear key pressed!');
        }
        if (action === 'calculate') {
        console.log('equals key pressed!');  
        const firstValue = calculator.dataset.firstValue;
        const secondValue = displayedNum;
        const operator = calculator.dataset.operator;
      // need to create a separate calculate function
        const calculate = (n1, operator, n2) => {
            // Perform calculation and return calculated value.
            let result = '';
            if (operator === 'add') {
                result = n1 + n2;
            } else if (operator === 'subtract') {
                result = n1 - n2;
            } else if (operator === 'multiply') {
                result = n1 * n2;
            } else if (operator === 'divide') {
                result = n1 / n2;
            }
            return result;
        }
        display.textContent = calculate(firstValue, operator, secondValue);
        }
    }
    // Remove .is-depressed class from the keys, so the keys are not 'stuck'
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'));
})
