<template>
    <div>
        Email
        <input type="text" v-model="emailInput">
        Password
        <input type="text" v-model="passwordInput">
        <button @click="register">register</button>
        <!-- <h1>{{ even(10) }}</h1> -->
        <h1>{{ arrayList([1,2,3,4,5]) }}</h1>
        <h1>{{ fullName("Shiva","Shekhar") }}</h1>
        <!-- <h1>{{ $todate() }}</h1> -->
        <h1>{{ $hello("Shiva") }}</h1>
    </div>
</template>

<script setup>
definePageMeta({
    middleware:["auth"]
})
 const name1=useCart();

   const emailInput=ref('');
   const passwordInput=ref('');
    const register=()=>{
      const user={
        email:emailInput.value,
        password:passwordInput.value
      }
      name1.value.push(user);
      console.log(name1.value)
    }
  
 const {even} =useNuxtApp();
 const {arrayList}=useNuxtApp();
 const {fullName} = useNuxtApp();
 const name=fullName("shiva","shekhar");
</script>

<style lang="scss" scoped>

</style>