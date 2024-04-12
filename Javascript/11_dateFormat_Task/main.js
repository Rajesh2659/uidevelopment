 function rajNew() {
    var date1, date2;
         //define two date object variables with dates inside it
         date1 = new Date("04/10/2024");
         date2 = new Date("04/12/2024");

         //calculate time difference
         var time_difference = date2.getTime() - date1.getTime();

         //calculate days difference by dividing total milliseconds in a day
         var days_difference = time_difference / (1000 * 60 * 60 );
         
         document.getElementById("some").innerHTML=days_difference;
}