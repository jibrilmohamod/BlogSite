<template>
 <div class="bg-green-400 flex justify-center h-[92vh]">
  <form
   class="border h-[69vh] w-[45vw] m-auto rounded-xl bg-slate-200 p-14 flex flex-col gap-8"
  >
   <!-- form lable -->
   <h1 class="text-3xl">Registration Form</h1>

   <!-- name inputs -->
   <div class="grid grid-cols-2 gap-3">
    <div class="flex flex-col">
     <label for="fName" class="text-xl"> First Name </label>
     <input
      type="text"
      class="h-10 rounded-lg w-4/6 px-3 text-[16px] focus:outline"
      id="fName"
      required
     />
    </div>

    <div class="flex flex-col">
     <label for="lName" class="text-xl"> Last Name </label>
     <input
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
     <label for="bDay" class="text-xl"> Birthday </label>
     <input
      type="date"
      class="h-10 rounded-lg w-4/6 px-3 text-[16px] focus:outline"
      id="fName"
      required
     />
    </div>

    <div cla-0ss="flex flex-col">
     <label for="gender" class="text-xl"> Gender </label>
     <div
      class="h-10 border-0 border-red-500 w-4/6 rounded-lg flex justify-around items-center"
     >
      <label for="male" class="flex gap-1">
       <input type="radio" name="male" id="" value="Male" />Male
      </label>
      <label for="female" class="flex gap-1"
       ><input type="radio" name="female" id="" value="Female" />Female</label
      >
     </div>
    </div>
   </div>

   <!-- email and phone -->

   <div class="grid grid-cols-2 gap-3">
    <div class="flex flex-col">
     <label for="fName" class="text-xl"> First Name </label>
     <input
      type="text"
      class="h-10 rounded-lg w-4/6 px-3 text-[16px] focus:outline"
      id="fName"
      required
     />
    </div>

    <div class="flex flex-col">
     <label for="phone" class="text-xl"> Phone No. </label>
     <input
      type="tel"
      class="h-10 rounded-lg w-4/6 px-3 text-[16px] focus:outline hover:placeholder:"
      id="phone"
      required
     />
    </div>
   </div>

   <div></div>
  </form>
 </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
