<script setup>
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
</script>

<template>
  <div class="logreg-container">
    <Login/>
    <div class="reg-container" v-if="showReg">
        <Register/>
    </div>
    <div class="register-prompt" v-if="showPrompt">
        <div class="reg-msg">
          <h1>No Account?</h1>
          <button @click="switchState()"></button>
        </div>
        
    </div>
    
  </div>
  

</template>

<script>

export default {
  data() {
    return {
      showReg: false,
      showPrompt: true,
    }    
  },
  methods: {
    switchState() {
      this.showReg = true;
      this.showPrompt = false;
    }
  }
}
</script>

<style>
  .reg-msg button{
    right: -80px;
    bottom: -50px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: darkgray;
  }
  .reg-msg {
    right: -115px;
    bottom: -100px;
  }
  .register-prompt {
      float: right;
      align-items: center;
      border-radius: 15px;
      width: 400px;
      top: -250px;
      right: -50px;
      height: 400px;
      background-color: grey;
      outline-color: white;
  }
</style>


