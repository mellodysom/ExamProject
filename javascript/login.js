var users = [{firstName: "Philip", lastName: "Braun", username: "Philip", password: "Braun"},{firstName: "Mellody", lastName: "Som", username:"Mellody", password: "Som", firstName: "Virginia", lastName: "Corcuera", username: "Virginia", password: "Corcuera"}]


// Function for checking if user is known
var count = 0

submit.onclick = function() {
    var inputUsername = document.getElementById('loginusername').value;
    var inputPassword = document.getElementById('loginpassword').value;

  
    if (inputPassword.length < 1 || inputUsername.length < 1) {
      document.getElementById('resultSpan').innerText = "You should input something";
        return false;
    }
    if (count == 3) {
        alert("You have used all your tries")
        usernameUI.disabled=true;
        passwordUI.disabled=true;
    }
    for (let i = 0; i < users.length; i ++) {
        if (inputPassword == users[i].password && inputUsername == users[i].username) {  
            alert('Login is correct')
            window.location.assign("./overview.html");
            return true;
        }
    }
    alert("Password is wrong");
    count ++

    return false;
}   

adduser.onclick = function () {
  window.location.assign("./createUser.html")
}