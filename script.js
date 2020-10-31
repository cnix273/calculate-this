var num1 = '';
var num2 = '';
var operate = '';
var result = '';

$('button').on('click', function(listen){
    var btn = listen.target.innerHTML;
    if (btn >= '0' && btn <= '9') {
        numBtn(btn);
    } 
    else {
        operBtn(btn);    
    }
})





function operBtn(operator){
    if (oper === '' ){
        oper = operator;
    } 
    else{  

    }
}

funciton operNum(num)