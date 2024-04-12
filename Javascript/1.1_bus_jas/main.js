const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    
      
    
    
  ];

  const userInfo = {};

  for (let propertyName in userInfo) {
    const userInfoDiv = document.getElementById("userInfo");
    const p = document.createElement("p");
    if (typeof userInfo[propertyName] === "object") {
      if (propertyName === "address") {
        p.innerHTML =
          propertyName +
          ": " +
          userInfo[propertyName]["street"] +
          ", " +
          userInfo[propertyName]["city"];
      } else {
        p.innerHTML = propertyName + ": " + userInfo[propertyName]["name"];
      }
    } else {
      p.innerHTML = propertyName + ": " + userInfo[propertyName];
    }
    userInfoDiv.appendChild(p);
  }

  




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
document.getElementById("users").innerHTML=trainDetails[0].value;
document.getElementById("users").innerHTML=trainDetails[0].trainNumber;
document.getElementById("users").innerHTML=trainDetails[0].from;
document.getElementById("users").innerHTML=trainDetails[0].to;
document.getElementById("users").innerHTML=trainDetails[0].arrival;
document.getElementById("users").innerHTML=trainDetails[0].deprature;
document.getElementById("users").innerHTML=trainDetails[0].status;

  

  const usersDiv = document.getElementById("users");
  let str = "";
  for (let i = 0; i < trainDetails.length; i++) {
    str += `
    <div class="main-container">
    <div class="div11" id="tno"></div>
    <div class="div12" id="tna"></div>
    <div class="div13">
      <input type="text" id="frm" placeholder="From" />
    </div>
    <div class="div14"><input type="text" id="to" placeholder="To" /></div>

    <div class="div15"><pre id="arr"></pre></div>

    <div class="div16"><pre id="dep"></pre></div>
    <form action="">
      <div class="div17" id="dep"><button id="btn">Book Ticket</button></div>
    </form>
  </div>
        `;
  }
 


  usersDiv.innerHTML = str;