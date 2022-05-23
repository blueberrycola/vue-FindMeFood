<template>
  <div class="login-container">
    
    <div class="login-form">
      <h1>Login:</h1>
      <form action="myurl" method="GET" name="loginForm">
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
.login-container {
  position: center;
  top: 150px;
  left: 70px;
  width: 1000px;
  height: 550px;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 15px 15px, rgba(255, 255, 255, 0.12) 0px -12px 31px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 23px, rgba(255, 255, 255, 0.09) 0px -3px 15px;
  border-radius: 25px;
  background: rgb(0, 128, 79);
}
.login-form {
  left: 50px;
  top: 50px;
  
}
.login-buttonboard {
  padding: 5px;
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