
    var busDetails=[
        {
            busName:" new Kvr Travels",
            sortBy:"Government of Ap",
            deprature:"22.30 PM",
            duration:"09hrs 10min",
            arrival:"5:35 AM",
            ratings:"*4.2",
            fare:"INR 660",
            seatsAvailable:"30 seats are Remaining"
        },
        {
            busName:" INDRA Travels",
            sortBy:"Government of Ap",
            deprature:"22.30 PM",
            duration:"09hrs 00min",
            arrival:"5:20 AM",
            ratings:"*4.0",
            fare:"INR 680",
            seatsAvailable:"10 seats are Remaining"
        },

    ]

document.getElementById("bus1").innerHTML=busDetails[0].busName;
document.getElementById("bus2").innerHTML=busDetails[0].sortBy;
document.getElementById("bus3").innerHTML=busDetails[0].deprature;
document.getElementById("bus4").innerHTML=busDetails[0].duration;
document.getElementById("bus5").innerHTML=busDetails[0].arrival;
document.getElementById("bus6").innerHTML=busDetails[0].ratings;
document.getElementById("bus7").innerHTML=busDetails[0].fare;
document.getElementById("bus8").innerHTML=busDetails[0].seatsAvailable;

var div=document.getElementById("bus-nav");
var display=1;
function openBuses(){
    if(display == 1){
        div.style.display ='block';
        display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}


   



    // Boarding details javascript

    var boardingDetails = [
        {
          time: "22:30",
          place: "IBRAHIMPATNAM-VJA",
          stop: "IBRAHIMPATNAM",
        },
        {
          time: "21:30",
          place: "GUNTAPALLI-VIJAY",
          stop: "GUNTUPALLI-CBS",
        },

        {
          time: "22:45",
          place: "GOLLAAPUDI-VIJAY",
          stop: "GOLLAAPUDI-CBS",
        },

        {
          time: "22:35",
          place: "GOLLAPUDI ONE CENTRE",
          stop: "ANDRA-HOSPITAL",
        },

        
      ];

      function callDetails() {
        
        document.getElementById("radio1").innerHTML = boardingDetails[0].time;
        document.getElementById("radio11").innerHTML = boardingDetails[0].place;
        document.getElementById("radio21").innerHTML = boardingDetails[0].stop;
        // boarding 2 details
        document.getElementById("radio2").innerHTML = boardingDetails[1].time;
        document.getElementById("radio12").innerHTML = boardingDetails[1].place;
        document.getElementById("radio22").innerHTML = boardingDetails[1].stop;

        // boarding 3 details
        document.getElementById("radio3").innerHTML = boardingDetails[2].time;
        document.getElementById("radio13").innerHTML = boardingDetails[2].place;
        document.getElementById("radio23").innerHTML = boardingDetails[2].stop;

        // boarding 4 details
        document.getElementById("radio4").innerHTML = boardingDetails[3].time;
        document.getElementById("radio14").innerHTML = boardingDetails[3].place;
        document.getElementById("radio24").innerHTML = boardingDetails[3].stop;

        // boarding 5 details
        document.getElementById("radio5").innerHTML = boardingDetails[0].time;
        document.getElementById("radio15").innerHTML = boardingDetails[0].place;
        document.getElementById("radio25").innerHTML = boardingDetails[0].stop;

        // boarding 6 details
        document.getElementById("radio6").innerHTML = boardingDetails[1].time;
        document.getElementById("radio16").innerHTML = boardingDetails[1].place;
        document.getElementById("radio26").innerHTML = boardingDetails[1].stop;

        // boarding 7 details
        document.getElementById("radio7").innerHTML = boardingDetails[2].time;
        document.getElementById("radio17").innerHTML = boardingDetails[2].place;
        document.getElementById("radio27").innerHTML = boardingDetails[2].stop;

        // boarding 8 details
        document.getElementById("radio8").innerHTML = boardingDetails[3].time;
        document.getElementById("radio18").innerHTML = boardingDetails[3].place;
        document.getElementById("radio28").innerHTML = boardingDetails[3].stop;
      }

      var info=document.getElementById("kyc");
      var mation=1;
      function viewSeats() {
          if(mation == 1){
              info.style.mation='block';
              mation=0;
          }
          else{
              info.style.mation='none';
              mation=1;
          }
      }




// //bus 2 details
// document.getElementById("bus11").innerHTML=busDetails[1].busName;
// document.getElementById("bus12").innerHTML=busDetails[1].sortBy;
// document.getElementById("bus13").innerHTML=busDetails[1].deprature;
// document.getElementById("bus14").innerHTML=busDetails[1].duration;
// document.getElementById("bus15").innerHTML=busDetails[1].arrival;
// document.getElementById("bus16").innerHTML=busDetails[1].ratings;
// document.getElementById("bus17").innerHTML=busDetails[1].fare;
// document.getElementById("bus18").innerHTML=busDetails[1].seatsAvailable;

// var div=document.getElementById("bus-nav1");
// var display=1;
// function openBuses1(){
//     if(display == 1){
//         div.style.display ='block';
//         display=0;
//     }
//     else{
//         div.style.display='none';
//         display=1;
//     }
// }









