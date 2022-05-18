<template>
  <div class="login-container">
    <h1>Login:</h1>
    <div class="login-form">
      <form action="myurl" method="GET" name="loginForm">
        <p><label for="username">Username:</label></p>
        <input type="text" name="username" id="uname">

        <p><label for="username">Password:</label></p>
        <input type="password" name="password" id="pword">

      </form>
      <label class="switch">
        Remember Me
        <input type="checkbox">
        <span class="slider"></span>
      </label>
      <button>Login</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>