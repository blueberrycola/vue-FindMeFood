<script setup>



</script>

<template>
  <div class="container" v-if="!showList">
    <Home v-on:homeclicked="onChildClick"/>
  </div>
  
  
</template>

<script>
import Home from '@/components/Home.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      showList: false,
      fromHome: {}
    }    
  },
  components: {
        Home
  },
  methods: {
    onChildClick (value) {
      this.showList = true;
      console.log(value);
      this.fromHome = value;
    }
  },
    
}


</script>


<style>
  .container {
    top: 5px;
  }
</style>

