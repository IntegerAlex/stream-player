import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm'

document.getElementById("signup-button").addEventListener("click", signup);
function signup(){
  if (document.getElementById("email").value == "" || document.getElementById("password").value == "" || document.getElementById("username").value == "") {
    alert("Please enter your email and password");
    return;
  }
  else{
    let emailID = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    axios.post("https://xstreambackend.com/createAccount"+"?emailID="+emailID+"&password="+password+"&username="+username)
    .then(response => {
      console.log(response.data.status);  
      if (response.data.status) {
        alert("Signup Successful");
        window.location.href = "https://xstreamusic.com/login.html";
      }
      else{
        alert("Invalid email or password");
      }
    })
}
}