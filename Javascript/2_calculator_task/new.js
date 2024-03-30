function add(){
    var value1=document.getElementById("val_1").value;
    var value2=document.getElementById("val_2").value;
    var Result=Number(value1)+Number(value2);
    document.getElementById("res1").innerHTML=Result;
        
}
// -------------------------- Sub -----------------------

function sub(){
    var value3=document.getElementById("val_3").value;
    var value4=document.getElementById("val_4").value;
    var Result2=Number(value3)-Number(value4);
    document.getElementById("res2").innerHTML=Result2;
        
}

// -------------------------- mul -----------------------

function mul(){
    var value5=document.getElementById("val_5").value;
    var value6=document.getElementById("val_6").value;
    var Result3=Number(value5)*Number(value6);
    document.getElementById("res3").innerHTML=Result3;
        
}

// -------------------------- Div -----------------------

function div(){
    var value7=document.getElementById("val_7").value;
    var value8=document.getElementById("val_8").value;
    var Result4=Number(value7)/Number(value8);
    document.getElementById("res4").innerHTML=Result4;
        
}

// -------------------------- mod Div  -----------------------

function md(){
    var value9=document.getElementById("val_9").value;
    var value10=document.getElementById("val_10").value;
    var Result5=Number(value9)%Number(value10);
    document.getElementById("res5").innerHTML=Result5;
        
}