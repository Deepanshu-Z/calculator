let value;
function getVal(butt){
    value = butt.innerHTML;
    displayVal(value);
}

let lastOperatorPressed = false;
let val1 = 1, val2, result = 0, counter = 0, numValue = 0;
function displayVal(value){
    const display = document.querySelector('.showCalc');

    if (['+', '-', '*', '/', '='].includes(value)) {
        
        if (lastOperatorPressed) {
            // display.innerHTML = 
        }

        else{
            display.innerHTML += value;
            lastOperatorPressed = true;
            counter = 0;
            val1 = 1;
            result = 0;  
        }

    }
    
    else{
        display.innerHTML += value;
        let numValue = parseInt(value);
        val1 = (Math.pow(10, counter));
        result += val1*numValue;
        counter++; 
        console.log(value + " " + result);
    }
}
