const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
calculator.addEventListener('click', function(event){
    if (event.target.nodeName =="BUTTON") {
        if (event.target.textContent=="="){
            evaluate(); 
        }
        else if(event.target.textContent=="C"){
            clear();
        }
        else if(event.target.textContent=="DEL"){
            deleteValue();
        }
        else{
            addToDisplay(event.target.textContent);
        }
        }
    }
)
function clear(){
    display.textContent="";
}
function addToDisplay (value){
display.textContent +=value;
}
function deleteValue(){
    let currentContent = display.textContent;
    display.textContent = currentContent.substring(0, currentContent.length - 1);
}
function evaluate(){
    try{
    let calculation = eval(display.textContent);
    display.textContent = calculation;
    } catch(error){
    display.textContent="invalid Operation";
    console.error(error);
    }
}