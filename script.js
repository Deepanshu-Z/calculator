let value;
function getVal(butt){
    value = butt.innerHTML;
    displayVal(value);
}

let lastOperatorPressed = false, opPressed;
let val1 = 0, val2 = 0, result = 0, counter = 0, numValue = 0, i = 1, j = 1;

function displayVal(value){
    const display = document.querySelector('.showCalc');

    if (['+', '-', '*', '/', '='].includes(value)) {
        if(value == '=') lastOperatorPressed = false;
        if (lastOperatorPressed) {
            console.log(value + " pressed more than one time");
            return; 
        }

        else{
            display.innerHTML += value;
            lastOperatorPressed = true;
            if(j == 1) {
                operator = value;
                j++;
            }
            else{
                opPressed=value;
                j==1;
            } 
            counter = 0;
            result = 0;
            i++;
            if(opPressed == '=') {
                console.log("Before calculating the results: " +val1+ " " + val2+ " " + operator);
                calculate(val1, val2, operator);
            }
        }

    }
    
    else{
        display.innerHTML += value;
        let numValue = parseInt(value);
        if(i==1){
            val1 = val1 * 10 + numValue;
        }else{
            val2 = val2 * 10 + numValue;
            
        } 
        console.log(value + " Value 1 is: " + val1 + " Value 2 is: " + val2);

    }
}


function calculate(v1,v2,operator){
    const display = document.querySelector('.showCalc');
    if(operator == '+'){
        result  = v1 + v2;
    }else if (operator == '-'){
        result = v1 - v2;
    }else if(operator == '/'){
        result = v1 / v2;
    }else if(operator == '*'){
        result = v1 * v2;
    }else console.log("ERROR!");

    lastOperatorPressed = false;
    val1 = result;
    i++;
    val2 = 0;
    display.innerHTML = result;
}