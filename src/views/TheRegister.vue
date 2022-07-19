<template>
 <div class="flex justify-center h-[92vh] fon">
  <form
   @submit.prevent="register"
   class="h-[69vh] w-[40vw] m-auto rounded-xl bg-green-100 p-14"
  ></form>
 </div>
</template>

<script setup>
 import { ref } from "vue"
 import { useRouter } from "vue-router"
 import { supabase } from "../supabase/init"

 const fname = ref(null)
 const lname = ref(null)
 const bday = ref(Date)
 const gender = ref(null)
 const email = ref(null)
 const phoneNo = ref(null)
 const password = ref(null)
 const conf = ref(null)
 const errorMsg = ref("")
 const router = useRouter()

 //  register function
</script>

<style scoped></style>
