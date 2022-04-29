const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // more code here to make it do something
        // have to add data-action attribute in the html to make this work.
        
        const key= e.target;
        const action =  key.dataset.action;
        
        if (!action) {
            console.log('number keys');
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' 
        ) {
            console.log('Operator pressed!');
        }
        if (action === 'decimal') {
            console.log('decimal key was pressed');
        }
        if (action === 'clear') {
            console.log('clear key pressed!');
        }
        if (action === 'calculate') {
        console.log('equals key pressed!');  
        }
    }
})