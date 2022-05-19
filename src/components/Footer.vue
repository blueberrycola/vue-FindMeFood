<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="footer">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      This Project was made by Chase Johnston,
            <a href="https://github.com/blueberrycola"><b>Check out my GitHub!</b></a>
    </h3>
    <h3>
      Development done using
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>
    </h3>
    
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  padding: 10px;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>
