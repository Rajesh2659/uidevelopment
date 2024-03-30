var busDetails=[
    {
        busName:"Sai Krishna",
        departure:"Hyderabad",
        duration:"06.hrs",
        arrival:"22.10 pm",
        ratings:"*4.2",
        fare:" Rs.800.00",
        seatsAvailable:"10 seats left"
    },
    {
        busName:"Orange tra",
        departure:"Vijayawada",
        duration:"06.hrs",
        arrival:"22.10 pm",
        ratings:"*4.2",
        fare:" Rs.1200.00",
        seatsAvailable:"20 seats Remaining"
    },
    {
        busName:"Garuda vega",
        departure:"Guntur(n)",
        duration:"07.hrs",
        arrival:"22.10 pm",
        ratings:"*4.2",
        fare:"Rs.1400.00",
        seatsAvailable:"0 seats "
    },
    {
        busName:"Morning Star",
        departure:"Banglore",
        duration:"12.hrs",
        arrival:"22.10 pm",
        ratings:"*4.2",
        fare:" Rs.1800.00",
        seatsAvailable:"5 seats Remaining"
    }
]

//----------------------------------- bus main-----------------

document.getElementById("busname").innerHTML=busDetails[0] .busName;
document.getElementById("dep").innerHTML=busDetails[0] .departure 
document.getElementById("dur").innerHTML=busDetails[0] .duration
document.getElementById("arr").innerHTML=busDetails[0] .arrival 
document.getElementById("ra").innerHTML=busDetails[0] .ratings 
document.getElementById("fare").innerHTML=busDetails[0] .fare 
document.getElementById("sa").innerHTML=busDetails[0] .seatsAvailable

function myFunction() {
    var x = document.getElementById("btnr");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//----------------------------------- bus one-----------------

document.getElementById("busname1").innerHTML=busDetails[1] .busName;
document.getElementById("dep1").innerHTML=busDetails[1] .departure 
document.getElementById("dur1").innerHTML=busDetails[1] .duration
document.getElementById("arr1").innerHTML=busDetails[1] .arrival 
document.getElementById("ra1").innerHTML=busDetails[1] .ratings 
document.getElementById("fare1").innerHTML=busDetails[1] .fare 
document.getElementById("sa1").innerHTML=busDetails[1] .seatsAvailable

//----------------------------------- bus two-----------------

document.getElementById("busname2").innerHTML=busDetails[2] .busName;
document.getElementById("dep2").innerHTML=busDetails[2] .departure 
document.getElementById("dur2").innerHTML=busDetails[2] .duration
document.getElementById("arr2").innerHTML=busDetails[2] .arrival 
document.getElementById("ra2").innerHTML=busDetails[2] .ratings 
document.getElementById("fare2").innerHTML=busDetails[2] .fare 
document.getElementById("sa2").innerHTML=busDetails[2] .seatsAvailable

//----------------------------------- bus three-----------------

document.getElementById("busname3").innerHTML=busDetails[3] .busName;
document.getElementById("dep3").innerHTML=busDetails[3] .departure 
document.getElementById("dur3").innerHTML=busDetails[3] .duration
document.getElementById("arr3").innerHTML=busDetails[3] .arrival 
document.getElementById("ra3").innerHTML=busDetails[3] .ratings 
document.getElementById("fare3").innerHTML=busDetails[3] .fare 
document.getElementById("sa3").innerHTML=busDetails[3] .seatsAvailable



