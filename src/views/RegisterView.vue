<template>
  <div class="register-container">
    <h1>Register:</h1>
    <div class="register-form">
      <form class="regForm">
        <p><label for="username">Username:</label></p>
        <input type="text" name="username" id="uname">

        <p><label for="username">Password:</label></p>
        <input type="password" name="password" id="pword">

        <p><label for="pword-confirm">Password Confirm:</label></p>
        <input type="password" name="pword-confirm" id="pword-confirm">

        <p><label for="email">Email:</label></p>
        <input type="text" name="email" id="email">
      <!-- Create event handler for getting register-form input -->
      </form>
      <div class="register-buttonboard">
        <button @click="initJson()">Register</button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.port = 8080

export default {
  
  setup(){
    console.log("Test");
  },
  methods: {
    initJson() {
      const json = {
        username: document.getElementById("uname").value,
        password: document.getElementById("pword").value,
        cpass: document.getElementById("pword-confirm").value,
        email: document.getElementById("email").value,
      }
      console.log(json);
      let test = this.checkRegisterForm(json)
      if(test == 0) {
        console.log("register error");
      } else {
        console.log("Success!");
        this.checkRegisterForm(json);
      }
    },
    checkRegisterForm(json) {
      //Check if password and confirm password fields match
      if(json.password === json.cpass) {
        console.log("Passwords Match!");
      } else {
        console.log("Passwords dont match :(")
        return 0;
      }
      //email regex to validate whether it is a real email address
      let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      let boolregex = regex.test(json.email);
      if(boolregex) {
        console.log("Email is valid!");
      } else {
        console.log("Email isnt valid");
        return 0;
      }
      axios.post('http://localhost:8080/user/register', json);
      return 1;
    }
  }
}



</script>


<style>


input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.register-container {
  position: center;
  top: 150px;
  left: 70px;
  width: 1000px;
  height: 550px;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 15px 15px, rgba(255, 255, 255, 0.12) 0px -12px 31px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 23px, rgba(255, 255, 255, 0.09) 0px -3px 15px;
  border-radius: 25px;
  background: rgb(0, 128, 79);
}
.register-form {
  left: 50px;
  width: 90%;
  top: 20px;
  
}
.register-buttonboard{
  padding: 5px;
  right: 15px;
  bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-buttonboard button{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
    width: 200px;
    height: 60px;
    
}
.register-buttonboard button:hover {
    background: lightgray;
}
.register-buttonboard button:active {
    background: lightgreen
}
</style>