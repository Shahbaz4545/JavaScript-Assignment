function getNumber(num){
    var result = document.getElementById('result');
    result.value +=num;
}
function clearResult(){
    var result =  document.getElementById('result');
    result.value="";
}
function getResult(){
    var result = document.getElementById("result");
    result.value= eval(result.value);
}
function Ln(){
    var result = document.getElementById("result");
    result.value=Math.log(result.value);

}
function Square(){
    var result=  document.getElementById("result");
    result.value=eval(result.value)*eval(result.value);
}
function Cube(){
    var result =  document.getElementById('result');
    result.value=eval(result.value)*eval(result.value)*eval(result.value);;
}
function squareRoot(){
    var result=  document.getElementById('result');
    result.value=Math.sqrt(result.value);
}
function oneHalf(){
    var result=  document.getElementById('result');
    result.value=1/(result.value);
}
