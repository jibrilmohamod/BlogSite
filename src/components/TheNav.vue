<template>
 <header
  class="w-full h-20 bg-green-500 flex py-4 px-28 items-center justify-between"
 >
  <h1 class="text-3xl text-white border">VueBlog</h1>
  <nav class="flex justify-self-end">
   <router-link to="path" class="cursor-pointer border text-white px-7"
    ><i class="fas fa-house inline text- border"></i> Home</router-link
   >
   <router-link to="path" class="border cursor-pointer text-white px-7"
    >Login
   </router-link>
  </nav>
 </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
