import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm'

document.getElementById("loginButton").addEventListener("click", login);
function login(){
  if (document.getElementById("email").value == "" || document.getElementById("password").value == "") {
    alert("Please enter your email and password");
    return;
  }
  else{
  let emailID = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  axios.get("https://xstreambackend.com/loginAccount"+"?emailID="+emailID+"&password="+password)
  .then(response => {
    console.log(response.data.status);  
    if (response.data.status) {
      localStorage.setItem("id", response.data.session);
      alert("Login Successful");
      window.location.href = "https://xstreamusic.com/index.html";
    }
    else{
      alert("Invalid email or password");
    }
  })
}
}

  