<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold text-green-600">BroomTech</router-link>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link 
                v-for="item in navigationItems" 
                :key="item.path"
                :to="item.path"
                class="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium"
                :class="{ 'text-green-600': currentRoute === item.path }"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
          
          <div class="flex items-center">
            <div class="flex items-center mr-4">
              <span class="text-gray-600">
                <img src="/placeholder.svg?height=20&width=20" alt="Language" class="inline-block h-5 w-5 mr-1">
                Philippines - English
              </span>
            </div>
            <button class="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Log in
            </button>
            <button class="ml-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="pt-16">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.path)

const navigationItems = [
  { name: 'Business', path: '/business' },
  { name: 'Personal', path: '/personal' },
  { name: 'Driver', path: '/driver' },
  { name: 'Rewards', path: '/rewards' },
  { name: 'Company', path: '/company' }
]
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  --primary: #10B981;
  --primary-dark: #059669;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>