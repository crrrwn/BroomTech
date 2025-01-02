<template>
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">About Our Company</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
            <p class="text-gray-600 mb-6">
              To provide fast, reliable, and efficient delivery services that connect businesses 
              and individuals across the Philippines.
            </p>
            <h2 class="text-2xl font-semibold mb-4">Our Vision</h2>
            <p class="text-gray-600">
              To be the leading delivery platform in Southeast Asia, known for innovation, 
              reliability, and customer satisfaction.
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-4">Company Values</h2>
            <div class="space-y-4">
              <div v-for="value in companyValues" :key="value.title" 
                class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="font-semibold mb-2">{{ value.title }}</h3>
                <p class="text-gray-600">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const companyValues = [
    {
      title: 'Innovation',
      description: 'Continuously improving our services through technology'
    },
    {
      title: 'Reliability',
      description: 'Delivering on our promises, every time'
    },
    {
      title: 'Customer Focus',
      description: "Putting our customers' needs first"  // Fixed the string literal issue by using double quotes
    }
  ]
  </script>