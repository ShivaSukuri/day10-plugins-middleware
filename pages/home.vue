<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400">
      <div class="text-gray-800 text-center">
        <h1 class="text-2xl font-semibold mb-8">Hi, welcome to the home page</h1>
        <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: ['auth']
  });
  
  const status = logInStatus();
  
  const logout = () => {
    status.value = false;
    navigateTo('/login');
  };
  </script>
  
  <style scoped>
  /* No specific styles here as Tailwind is handling the styling */
  </style>
  