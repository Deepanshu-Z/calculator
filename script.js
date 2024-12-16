let value;
function getVal(butt){
    value = butt.innerHTML;
    displayVal(value);
}

function displayVal(value){
    const display = document.querySelector('.showCalc');
    display.innerHTML += value;
}
