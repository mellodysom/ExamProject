var users = [{firstName: "Philip", lastName: "Braun", username: "Philip", password: "Braun", id: 1},{username:"Mellody", password: "Som", id: 2}]

class User {
  constructor(firstName, lastName, username, password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.password = password;
  }
}

// Function for adding users 
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username') 
const passwordUI = document.getElementById('password')
const checkboxUI = document.getElementById('terms')
const submitBtnUI = document.getElementById('submit-btn')

submitBtnUI.onclick = function () {
  console.log(users);
  if(checkboxUI.checked) {
    if(firstNameUI.value.length > 0 && lastNameUI.value.length > 0 && usernameUI.value.length > 0 && passwordUI.value.length > 0) {
      if(passwordUI.value.length > 7) { 
      var firstName = firstNameUI.value
      var lastName = lastNameUI.value
      var username = usernameUI
      var password = passwordUI
      }
      else {
        document.getElementById('resultSpan').innerText = "Your password is too short"
      }
    }
    else {
      document.getElementById('resultSpan').innerText = "You need to fill out the form"
      return false
    }
    for (let i = 0; i < users.length; i++) {
      if (usernameUI.value === users[i].username)
      document.getElementById('resultSpan').innerText = "Username is already in use"
      return false
  }
  users.push(new User(firstName, lastName, username, password))
  }
}


adduser.onclick = function () {
  var username = prompt("Username");
  if (username.includes("@student.cbs.dk")) {
    var password = prompt("Password");
    var id = prompt("id");
    return username, password, id
  }
  else {
    alert("You need a CBS e-mail to use this webpage")
  }

 users.push({username: username, password: password, id: id})
}

// Function for checking if user is known

var count = 0

submit.onclick = function() {
    var inputUsername = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;
  
    if (inputPassword.length < 1 || inputUsername.length < 1) {
        alert("You should input something");
        return false;
    }
    if (count == 3) {
        alert("You have used all your tries")
        document.getElementById("username").disabled=true;
        document.getElementById("password").disabled=true;
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

/* Things to do:
Go through Martens example and implement it all. Checkbox with terms and conditions, check for first name, last name, password etc. */ 