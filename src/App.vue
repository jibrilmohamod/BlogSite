<script setup>
 import { RouterLink, RouterView } from "vue-router"
</script>

<template>
 <div class="wrapper">
  <nav class="w-full h-12 bg-red-500">
   <RouterLink to="/">Home</RouterLink>
   <RouterLink to="/about">About</RouterLink>
  </nav>
 </div>

 <RouterView />
</template>
