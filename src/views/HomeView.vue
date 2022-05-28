<script setup>
import Home from '@/components/Home.vue'
</script>

<template>
  <div class="container">
    <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/starredPlaces">Starred Places</RouterLink>
      </nav>
    </div>
  </header>
    <Home/>
  </div>
  
  
</template>

