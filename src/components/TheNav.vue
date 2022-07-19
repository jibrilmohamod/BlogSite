<template>
 <header
  class="lg:w-full h-[8vh] bg-green-500 flex flex-col py-4 px-28 items-center justify-between md:flex-row"
 >
  <router-link to="/" class="text-4xl text-white font-['Rubik_Moonrocks']"
   >VueBlog</router-link
  >
  <nav class="flex flex-col justify-self-end md:flex-row">
   <router-link to="path" class="cursor-pointer text-white px-7"
    ><i class="fas fa-house inline text-xl pr-1 hover:text-neutral-500"></i>
    Home</router-link
   >
   <router-link to="path" class="cursor-pointer text-white px-7"
    ><i class="text-xl fas fa-photo-film pr-1 hover:text-neutral-500"></i
    >Categories
   </router-link>

   <router-link to="path" class="cursor-pointer text-white px-7"
    ><i class="text-xl fas fa-user pr-1 hover:text-neutral-500"></i>Me
   </router-link>

   <router-link to="/register" class="cursor-pointer text-white px-7"
    ><i
     class="text-xl fas fas fa-person-walking-arrow-right pr-1 hover:text-neutral-500"
    ></i
    >Sign Up
   </router-link>
  </nav>
 </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
