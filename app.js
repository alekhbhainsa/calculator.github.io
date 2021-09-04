// get number
function getNumber(num) {
    var result= document.getElementById("inpt");
    result.value += num;

}

//getResult
function getResult(){
    var result= document.getElementById("inpt");
    result.value = eval(result.value);
}
function percentage() {
    var result= document.getElementById("inpt");
    result.value = eval(result.value)/100;
    
}
//clearResult
function clearResult(){
    var result= document.getElementById("inpt"); 
    result.value = "";
}
//deleteChar
function deleteChar(){
    var num = document.getElementById("inpt"); 
    var remove = num.value;
    remove = remove.slice(0,-1) ; // to remove last char from a string
    num.value = remove;
}
