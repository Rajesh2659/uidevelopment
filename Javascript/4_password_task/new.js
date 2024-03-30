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
        email: "denaboina2659@gmail.com",
        password: "rajesh",
      },
      {
        email: "lokesh@gmail.com",
        password: "lokesh",
      },
      {
        email: "arun@gmail.com",
        password: "arun",
      },
    ];

    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;
    let filteredUser;
    if (
      users[0].email === enteredEmail &&
      users[0].password === enteredPassword
    ) {
      filteredUser = users[0];
    } else if (
      users[1].email === enteredEmail &&
      users[1].password === enteredPassword
    ) {
      filteredUser = users[1];
    } else if (
      users[2].email === enteredEmail &&
      users[2].password === enteredPassword
    ) {
      filteredUser = users[2];
    }

    if (filteredUser) {
    //   console.log(filteredUser);
    document.getElementById("par1").innerHTML="Details are matching"
    } else {
        document.getElementById("par2").innerHTML="Details are not matching"
    }
  }