<template>
 <div class="flex justify-center h-[92vh] fon">
  <form
   @submit.prevent="register"
   class="h-[50vh] w-[50vw] m-auto rounded-xl p-14 grid-cols-2 gap-2"
  >
   <!-- actual form  -->
   <div class="row-start-1 row-span-2 rounded-l-md flex flex-col gap-6">
    <h1 class="text-2xl font-bold">Sign In</h1>

    <!-- email input -->
    <label for="Name" class="absolute top-[26em] -mt-4">
     <i class="fas fa-envelope text-sm"></i>
    </label>
    <input
     required
     id="email"
     type="email"
     class="h-9 placeholder:focus:text-green-400 outline-none border-b border-black w-80 pl-7 text-sm"
     placeholder="Your Email "
     v-model="email"
    />

    <!-- password  -->

    <label for="Name" class="text-sm absolute top-[33em]">
     <i class="fas fa-lock"></i>
    </label>
    <input
     required
     id="password"
     type="password"
     class="h-9 placeholder:focus:text-green-400 outline-none border-b border-black w-80 pl-7 text-sm"
     placeholder="Password "
     v-model="password"
    />

    <!-- submit button  -->
    <button
     type="submit"
     class="place-self-start h-12 w-32 border hover:bg-green-400 hover:text-white"
    >
     Log In
    </button>
   </div>

   <!-- bgimage -->
   <div class="row-start-1 row-span-2 rounded-r-md flex flex-col">
    <div class="mx-auto">
     <img src="@/assets/images/signup-image.jpg" class="h-72 w-72" alt="" />
    </div>
    <router-link to="/register" class="m-auto border-b hover:border-black">
     Not Registered?</router-link
    >
   </div>
  </form>
 </div>
</template>

<script setup>
 import { ref } from "vue"
 //  import { useRouter } from "vue-router"

 const email = ref(null)
 const password = ref(null)
 //  const router = useRouter()

 //  register function
</script>

<style scoped>
 form {
  display: grid;
  grid-template-rows: 1fr 1fr;
 }
</style>
