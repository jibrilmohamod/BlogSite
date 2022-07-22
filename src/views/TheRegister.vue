<template>
 <div class="flex justify-center h-[92vh] fon">
  {{ errorMsg }}
  <form
   @submit.prevent="register"
   class="h-[50vh] w-[50vw] m-auto rounded-xl p-14 grid-cols-2 gap-2"
  >
   <!-- actual form  -->
   <div class="row-start-1 row-span-2 rounded-l-md flex flex-col gap-6">
    <h1 class="text-2xl font-bold">Sign Up</h1>

    <!-- name inputs -->
    <label for="username" class="absolute top-[25em]">
     <i class="fas fa-user text-sm"></i>
    </label>
    <input
     required
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
    <!-- submit button  -->
    <button
     type="submit"
     class="place-self-start h-12 w-32 border hover:bg-green-400 hover:text-white hover:duration-150"
    >
     Sign Up
    </button>
   </div>

   <!-- bgimage -->
   <div class="row-start-1 row-span-2 rounded-r-md flex flex-col">
    <div class="mx-auto">
     <img src="@/assets/images/signup-image.jpg" class="h-72 w-72" alt="" />
    </div>
    <router-link to="/login" class="m-auto border-b hover:border-black">
     Already Registered?</router-link
    >
   </div>
  </form>
 </div>
 {{username}}
</template>

<script setup>
 import axios from "axios";
import { ref } from "vue"
 import { useRouter } from "vue-router"
 //  import { useRouter } from "vue-router"

 const email = ref(null)
 const password = ref(null)
 const username = ref("")
 const conf = ref(null)
 let errorMsg = ref(null)
 let jwt = ref(null)
 const router = useRouter()

 //  register function

 const register = async () => {
  axios.post('https://blogpa.herokuapp.com/api/auth/local/register', {
   username: username.value,
   email: email.value,
   password: password.value,
   confirmPassword: conf.value
  })
   .then(res => {
    console.log(res)
    jwt = res.data.jwt
    localStorage.setItem("jwt", jwt)
    router.push("/")
   })
   .catch(err => {
    let {request} = err
    let {response} = request
    let {data} = response
    console.log(data)    
   })
 }
</script>

<style scoped>
 form {
  display: grid;
  grid-template-rows: 1fr 1fr;
 }
</style>
