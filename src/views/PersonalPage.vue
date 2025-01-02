<template>
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Personal Delivery</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="service in personalServices" :key="service.id" 
            class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-xl font-semibold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const personalServices = [
    {
      id: 1,
      title: 'On-Demand Delivery',
      description: 'Get your items delivered whenever you need them'
    },
    {
      id: 2,
      title: 'Scheduled Delivery',
      description: 'Plan your deliveries in advance'
    }
  ]
  </script>