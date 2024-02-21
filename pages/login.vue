<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-semibold mb-4">Login page</h1>
      
      <label class="block mb-2 text-gray-700">Email</label>
      <input type="text" v-model="emailInput" class="w-full border p-2 mb-4 rounded" />

      <label class="block mb-2 text-gray-700">Password</label>
      <input type="password" v-model="passwordInput" class="w-full border p-2 mb-4 rounded" />

      <button @click="login" class="bg-blue-500 text-white p-2 rounded mr-2">Login</button>
      <button @click="register" class="bg-purple-500 text-white p-2 rounded">Register</button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
});

const name = useCart();
const status = logInStatus();
const emailInput = ref('');
const passwordInput = ref('');

const login = () => {
  for (let x of name.value) {
    if (x.email === emailInput.value && x.password === passwordInput.value) {
      status.value = true;
     
    }
  }
  if (status.value === true) {
    navigateTo("/home");
    alert("Hello " + x.name);
  }
};

const register = () => {
  navigateTo("/Register");
};
</script>

<style lang="scss" scoped>
/* No specific styles here as Tailwind is handling the styling */
</style>
