// function constuctor

function newFunction(num1,num2,num3){

    var result1=num1+num2+num3;

    return result1;

}
document.getElementById("fc").innerHTML=(newFunction(10,20,30));

// Anonymous function
  var raj= function(value1,value2){

    var res2=value1-value2;
    return res2;


}
document.getElementById("af").innerHTML=raj(100,50)

// IIFE

 var od=(function product(para1,para2){
    var result3=para1*para2;
    return result3;

})(10,10)
document.getElementById("iif").innerHTML=od;

// Arrow Function

 var af=(in1,in2,in3)=>{
    result4=in1+in2+in3;
    return result4;
}
document.getElementById("arf").innerHTML=af(10,20,30)


// call back Functions

function processData(callbackFnc) {

    setTimeout(function() {
        callbackFnc();
    }, 6000);
    
}

function displayOutput() {
    console.log('Processed output successfully');
}

processData(displayOutput);

