var trainDetails=[
    {
        trainName:"Sabri Exp",
        trainNumber:12347,
        from:"Hyderbad",
        to:"vijayawada",
        arrival:"10:20 AM",
        deprature:"10:22 AM",
        status:"Book Ticket",

    },
    {
        trainNa:"Falaknuma Exp ",
        trainNu:12704,
        fr:"Hyderbad",
        top:"vijayawada",
        arr:"20:20 AM",
        depr:"20:25 AM",
        stat:"Book Ticket"
    }

]

document.getElementById("tno").innerHTML=trainDetails[0].trainName;
document.getElementById("tna").innerHTML=trainDetails[0].trainNumber;
document.getElementById("frm").innerHTML=trainDetails[0].from;
document.getElementById("to").innerHTML=trainDetails[0].to;
document.getElementById("arr").innerHTML=trainDetails[0].arrival;
document.getElementById("dep").innerHTML=trainDetails[0].deprature;
document.getElementById("btn").innerHTML=trainDetails[0].status;

// train two-----------
document.getElementById("tn").innerHTML=trainDetails[1].trainNa;
document.getElementById("tn1").innerHTML=trainDetails[1].trainNu;
document.getElementById("fr1").innerHTML=trainDetails[1].fr;
document.getElementById("to1").innerHTML=trainDetails[1].top;
document.getElementById("arr1").innerHTML=trainDetails[1].arr;
document.getElementById("dep1").innerHTML=trainDetails[1].depr;
document.getElementById("btn1").innerHTML=trainDetails[1].stat;



