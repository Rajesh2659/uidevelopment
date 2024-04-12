function changecolor(signalColor){
    // if(signalColor === 'red'){
    //     document.getElementById('red').style.backgroundColor = 'red';
    //     document.getElementById('orange').style.backgroundColor = 'white';
    //     document.getElementById('green').style.backgroundColor = 'white';
    // }
    // else if (signalColor === 'orange') {
    //     document.getElementById('red').style.backgroundColor = 'white';
    //     document.getElementById('orange').style.backgroundColor = 'orange';
    //     document.getElementById('green').style.backgroundColor = 'white';
    // } 
    // else if (signalColor === 'green') {
        

    //     document.getElementById('red').style.backgroundColor = 'white';
    //     document.getElementById('orange').style.backgroundColor = 'white';
    //     document.getElementById('green').style.backgroundColor = 'green';
    // } 
    // else(signalColor === 'white')
    // {
    //     document.getElementById('reset').style.backgroundColor='white';
    // }


    switch (signalColor) {
        case 'red':{
             document.getElementById('red').style.backgroundColor = 'red';
             document.getElementById('orange').style.backgroundColor = 'white';
              document.getElementById('green').style.backgroundColor = 'white';
          break;
          }
          case 'orange':{
             document.getElementById('red').style.backgroundColor = 'white';
             document.getElementById('orange').style.backgroundColor = 'orange';
              document.getElementById('green').style.backgroundColor = 'white';
          break;
          }
          case 'green':{
             document.getElementById('red').style.backgroundColor = 'white';
             document.getElementById('orange').style.backgroundColor = 'white';
              document.getElementById('green').style.backgroundColor = 'green';
          break;
          }
          
          default:{
            document.getElementById('red').style.backgroundColor = 'white';
            document.getElementById('orange').style.backgroundColor = 'white';
            document.getElementById('green').style.backgroundColor = 'white';
          }
     
        }

}