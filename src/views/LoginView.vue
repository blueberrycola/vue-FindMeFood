<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Login:</h1>
      <form id="loginForm">
        <p><label for="username">Username:</label></p>
        <input type="text" name="username" id="uname">

        <p><label for="username">Password:</label></p>
        <input type="password" name="password" id="pword">

      </form>
      <div class="login-buttonboard">
        <label class="switch">
          Remember Me 
          <input type="checkbox">
          <span class="slider"></span>
        </label>
        <button>Login</button>
      </div>

    </div>
  </div>
</template>

<style>

input[type=text] {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=password] {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.login-container {
  position: center;
  top: 150px;
  width: 500px;
  height: 400px;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 15px 15px, rgba(255, 255, 255, 0.12) 0px -12px 31px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 23px, rgba(255, 255, 255, 0.09) 0px -3px 15px;
  border-radius: 25px;
  background: rgb(0, 128, 79);
}
.login-form {
  left: 40px;
  top: 40px;
  
}
.login-form h1{
  top: -25px;
  left: -16px;
}
.login-buttonboard {
  padding: 5px;
  right: 65px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-buttonboard switch{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  
}
.login-buttonboard button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
    left: 16px;
    width: 200px;
    height: 60px;
}
</style>