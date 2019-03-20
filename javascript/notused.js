
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
  
  
  