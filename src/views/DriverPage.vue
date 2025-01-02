<template>
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Become a Driver</h1>
        <div class="bg-white rounded-lg shadow-sm p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 class="text-2xl font-semibold mb-4">Join Our Team</h2>
              <p class="text-gray-600 mb-6">
                Become a part of our growing delivery network and earn competitive rates
              </p>
              <button class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
                Apply Now
              </button>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4">Benefits</h3>
              <ul class="space-y-3">
                <li v-for="benefit in benefits" :key="benefit" class="flex items-center">
                  <span class="text-green-600 mr-2">✓</span>
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const benefits = [
    'Flexible working hours',
    'Competitive earnings',
    'Weekly payments',
    'Insurance coverage'
  ]
  </script>