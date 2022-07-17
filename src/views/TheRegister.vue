<template>
 <div class="flex justify-center h-[92vh] fon">
  <form
   class="h-[69vh] w-[40vw] m-auto rounded-xl bg-green-100 p-14 flex flex-col gap-8 justify-center"
  >
   <!-- form lable -->
   <h1 class="text-2xl fon">Registration Form</h1>

   <!-- name inputs -->
   <div class="grid grid-cols-2 gap-3">
    <div class="flex flex-col">
     <label for="fName" class="null"> First Name </label>
     <input
      type="text"
      class="h-10 rounded-lg w-4/6 px-3 text-[16px] focus:outline"
      id="fName"
      v-model="fname"
      required
     />
    </div>

    <div class="flex flex-col">
     <label for="lName" class="null"> Last Name </label>
     <input
      v-model="lname"
      type="text"
      class="h-10 rounded-lg w-4/6 px-3 text-[16px] focus:outline hover:placeholder:"
      id="lName"
      required
     />
    </div>
   </div>

   <!-- Birthday and Gender -->
   <div class="grid grid-cols-2 gap-3">
    <div class="flex flex-col">
     <label for="bDay" class="null"> Birthday </label>
     <input
      v-model="bday"
      type="date"
      class="h-10 rounded-lg w-4/6 px-3 text-[16px] focus:outline"
      id="fName"
      required
     />
    </div>

    <div cla-0ss="flex flex-col">
     <label for="gender" class="null"> Gender </label>
     <div
      class="h-10 border-0 border-red-500 w-4/6 rounded-lg flex justify-around items-center"
     >
      <label for="male" class="flex gap-1">
       <input
        v-model="gender"
        type="radio"
        name="male"
        id="null"
        value="Male"
       />Male
      </label>
      <label for="female" class="flex gap-1"
       ><input
        v-model="gender"
        type="radio"
        name="female"
        id="null"
        value="Female"
       />Female</label
      >
     </div>
    </div>
   </div>

   <!-- email and phone -->

   <div class="grid grid-cols-2 gap-3">
    <div class="flex flex-col">
     <label for="email" class="null"> Email </label>
     <input
      v-model="email"
      type="email"
      class="h-10 rounded-lg w-4/6 px-3 focus:outline"
      id="email"
      required
     />
    </div>

    <div class="flex flex-col">
     <label for="phone" class="null"> Phone No. </label>
     <input
      v-model="phoneNo"
      type="tel"
      class="h-10 rounded-lg w-4/6 px-3 text-[16px] focus:outline hover:placeholder:"
      id="phone"
      required
     />
    </div>
   </div>

   <!-- Password Input  -->

   <div class="grid grid-cols-2 gap-3">
    <div class="flex flex-col">
     <label for="pass" class="null"> Password </label>
     <input
      v-model="password"
      type="password"
      class="h-10 rounded-lg w-4/6 px-3 focus:outline"
      id="pass"
      required
     />
    </div>

    <div class="flex flex-col">
     <label for="conf" class="null"> Confirm Password </label>
     <input
      v-model="conf"
      type="password"
      class="h-10 rounded-lg w-4/6 px-3 text-[16px] focus:outline hover:placeholder:"
      id="conf"
      required
     />
    </div>
   </div>

   <!-- submit input -->

   <button type="submit" class="mt-5 h-12 bg-green-300 m-auto w-48 rounded-md">
    Create Account
   </button>

   <div></div>
  </form>
 </div>
</template>

<script setup>
 import { ref } from "vue"

 const fname = ref(null)
 const lname = ref(null)
 const bday = ref(Date)
 const gender = ref(null)
 const email = ref(null)
 const phoneNo = ref(null)
 const password = ref(null)
 const conf = ref(null)
 const errorMsg = ref(null)
</script>

<style scoped></style>
