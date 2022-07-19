<template>
 <div class="flex justify-center h-[92vh] fon">
  <form
   @submit.prevent="register"
   class="h-[50vh] w-[50vw] m-auto rounded-xl bg-green-100 p-14 grid-cols-2 gap-2"
  >
   <!-- actual form  -->
   <div class="row-start-1 row-span-2 border rounded-l-md flex flex-col gap-6">
    <h1 class="text-2xl">Sign Up</h1>

    <!-- name inputs -->
    <label for="username" class="absolute top-[25em]">
     <i class="fas fa-user text-sm"></i>
    </label>
    <input
     id="username"
     type="text"
     class="h-9 placeholder:focus:text-green-400 outline-none border-b border-black w-80 pl-7 text-sm"
     placeholder="Username"
     v-model="username"
    />

    <!-- email input -->
    <label for="Name" class="absolute top-[29em] -mt-1">
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

    <label for="Name" class="text-sm absolute top-[38em] -mt-2">
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

    <!-- confirm password -->

    <label for="conf" class="absolute top-[42em] -mt-1 text-sm">
     <i class="fas fa-lock"></i>
    </label>
    <input
     required
     id="conf"
     type="password"
     class="h-9 placeholder:focus:text-green-400 outline-none border-b border-black w-80 pl-7 text-sm"
     placeholder="Confirm Password"
     v-model="conf"
    />
   </div>

   <div class="row-start-1 row-span-2 rounded-r-md border">02</div>
  </form>
 </div>
</template>

<script setup>
 import { ref } from "vue"
 import { useRouter } from "vue-router"

 const email = ref(null)
 const password = ref(null)
 const username = ref("")
 const conf = ref(null)
 const router = useRouter()

 //  register function
</script>

<style scoped>
 form {
  display: grid;
  grid-template-rows: 1fr 1fr;
 }
</style>
