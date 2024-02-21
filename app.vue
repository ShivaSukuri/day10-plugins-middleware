<template>
  <div>
    <nav class="bg-blue-500 p-4">
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink to="/" class="text-white">Home</NuxtLink>
          <NuxtLink to="/login" class="text-white ml-4">Login</NuxtLink>
          <NuxtLink to="/register" class="text-white ml-4">Register</NuxtLink>
          <NuxtLink to="/home" class="text-white ml-4">User Home</NuxtLink>
        </div>
        <!-- You can add more navigation elements or user-related info here -->
      </div>
    </nav>

    <NuxtLayout></NuxtLayout>
    <NuxtPage />
  </div>
</template>

