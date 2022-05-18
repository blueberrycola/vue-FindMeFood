<template>
  <div class="register-container">
    <h1>Register:</h1>
    <div class="register-form">
      <form action="myurl" method="POST" name="regForm">
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

      </form>
      <button>Sign Up!</button>
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