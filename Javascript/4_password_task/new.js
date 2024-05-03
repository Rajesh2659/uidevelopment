var variable1=true;
function functionPassword(){
    variable1 = !variable1
    if(variable1 ){
        document.getElementById("password").type="text"
        document.getElementById("password-icon").classList.add("fa-eye");
        document.getElementById("password-icon").classList.remove("fa-eye-slash");

    }
    else{

        document.getElementById("password").type="password"
        document.getElementById("password-icon").classList.remove("fa-eye");
        document.getElementById("password-icon").classList.add("fa-eye-slash");

    }
}

// validations

function validateDetails() {
    const users = [
      {
        email: "admin",
        password: "admin",
      }
    ];

    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;
    let filteredUser;
    if (
      users[0].email === enteredEmail &&
      users[0].password === enteredPassword
    ) {
      filteredUser = users[0];
    } 

    if (filteredUser) {
    //   console.log(filteredUser);
    window.location.href = "./lead.html"; 
    } else {
        document.getElementById("par2").innerHTML="Invalid Email or password"
    }
  }
  function enterDetails(){
    document.getElementById("par2").innerHTML=""
  }