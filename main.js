// Class for construction users

class User {
  constructor(id, username, password) {
      this.id = id;
      this.username = username;
      this.password = password;  
  } 
} 

class Admin extends User {
  constructor(department, classes) {
    this.department = department;
    this.classes = classes;
  }
}

class Students extends User {
  constructor(dateOfStart,mastersProgram) {
    this.dateOfStart = dateOfStart;
    this.mastersProgram = mastersProgram
  }
}

// Class for construction electives

class Electives {
  constructor(id, cbsid, name) {
    this.id = id;
    this.cbsid = cbsid;
    this.name = name;
  }
}


var users = [{username: "Philip", password: "Braun", id: 1},{username:"Mellody", password: "Som", id: 2}]
var count = 0

// Function for adding users 

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
            window.location = "./overview.html";
            return true;
        }
    }
    alert("Password is wrong");
    count ++

    return false;
}   


elective1.onclick = function () {
    var rating = prompt("Give a rating from 1 to 5");
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }