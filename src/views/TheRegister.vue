<template>
 <div class="flex justify-center h-[92vh] fon">
  <form
   @submit.prevent="register"
   class="h-[69vh] w-[60vw] m-auto rounded-xl bg-green-100 p-14 grid-cols-2 gap-2"
  >
   <div class="row-start-1 row-span-2 border rounded-l-md">
    <h1 class="text-2xl">Sign Up</h1>
   </div>
   <div class="row-start-1 row-span-2 rounded-r-md border">02</div>
  </form>
 </div>
</template>

<script setup>
 //  import { ref } from "vue"
 //  import { useRouter } from "vue-router"

 //  const fname = ref(null)
 //  const lname = ref(null)
 //  const bday = ref(Date)
 //  const gender = ref(null)
 //  const email = ref(null)
 //  const phoneNo = ref(null)
 //  const password = ref(null)
 //  const conf = ref(null)
 //  const errorMsg = ref("")
 //  const router = useRouter()

 //  register function
</script>

<style scoped>
 form {
  display: grid;
  grid-template-rows: 1fr 1fr;
 }
</style>
