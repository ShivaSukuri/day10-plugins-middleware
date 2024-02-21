<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 class="text-2xl font-semibold mb-4">Register Form</h1>
  
        <label class="block mb-2 text-gray-700">Name</label>
        <input type="text" v-model="nameInput" class="w-full border p-2 mb-4 rounded" required />
  
        <label class="block mb-2 text-gray-700">Email</label>
        <input type="text" v-model="emailInput" class="w-full border p-2 mb-4 rounded" required />
  
        <label class="block mb-2 text-gray-700">Password</label>
        <input type="password" v-model="passwordInput" class="w-full border p-2 mb-4 rounded" required />
  
        <button @click="register" class="bg-indigo-500 text-white p-2 rounded">Register</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const name1 = useCart();
  const nameInput = ref('');
  const emailInput = ref('');
  const passwordInput = ref('');
  
  const register = () => {
    let res = false;
    if (nameInput.value !== "" && emailInput.value !== "" && passwordInput.value !== "") {
      const user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };
      name1.value.push(user);
      res = true;
    }
    if (res === true) {
      alert("User registered successfully");
      navigateTo("/login");
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* No specific styles here as Tailwind is handling the styling */
  </style>
  