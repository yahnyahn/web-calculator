const display = document.getElementById("display");
let calculated = false;

function appendToDisplay(input, isOperator=null){

    delError()

    if (calculated && !isOperator){
        clearDisplay();
        calculated = false;
    }
    display.value += input;

    if(isOperator){
        calculated = false;
    }
}

function calculate(){
    try{
        display.value = eval(display.value);

        if (display.value === "Infinity"){
            display.value = "Undefined";
        }
        calculated = true;
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}

function delAction(){
    delError()
    display.value = display.value.slice(0, -1);
}

function delError(){
    if (display.value === "Error"){
        clearDisplay()
    }
}