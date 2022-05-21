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

        <p><label for="fullname">Full Name:</label></p>
        <input type="text" name="fullname" id="fname">
      <!-- Create event handler for getting register-form input -->
      </form>
      <div class="register-buttonboard">
        <button @click="initPropsFromBtn({props})">Sign Up!</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  setup(){
    console.log("Test");
  },
  methods: {
    initPropsFromBtn() {
      const json = {
        user: document.getElementById("uname").value,
        pass: document.getElementById("pword").value,
        confPass: document.getElementById("pword-confirm").value,
        email: document.getElementById("email").value,
        fullname: document.getElementById("fname").value
      }
      console.log(json);
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
}
</style>