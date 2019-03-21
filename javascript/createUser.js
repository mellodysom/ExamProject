// These are the hardcoded users
var users = [{firstName: "Philip", lastName: "Braun", username: "Philip", password: "Braun"},{firstName: "Mellody", lastName: "Som", username:"Mellody", password: "Som", firstName: "Virginia", lastName: "Corcuera", username: "Virginia", password: "Corcuera"}]
  
// Function for adding users 
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username') 
const passwordUI = document.getElementById('password')
const checkboxUI = document.getElementById('terms')
const submitBtnUI = document.getElementById('submit-btn')

submitBtnUI.onclick = function () {
  if(checkboxUI.checked) {
    if(firstNameUI.value.length > 0 && lastNameUI.value.length > 0 && usernameUI.value.length > 0 && passwordUI.value.length > 0) {
      if(passwordUI.value.length > 7) { 
      var firstName = firstNameUI.value
      var lastName = lastNameUI.value
      var username = usernameUI.value
      var password = passwordUI.value
      users.push({firstName: firstName, lastName: lastName, username: username, password: password})
      document.getElementById('resultSpan').innerText = "The user has been created"
      console.log(users);
      firstNameUI.value ="";
      lastNameUI.value = "";
      usernameUI.value = "";
      passwordUI.value = "";
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
    }
  else {
    document.getElementById('resultSpan').innerText = "You need to accept the terms and conditions"
  }
  users.push({firstName: firstname, lastName: lastname, username: username, password: password})
}