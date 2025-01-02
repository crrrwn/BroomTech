<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Business Solutions</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="solution in businessSolutions" :key="solution.id" 
          class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 class="text-xl font-semibold mb-4">{{ solution.title }}</h3>
          <p class="text-gray-600 mb-4">{{ solution.description }}</p>
          <button class="text-green-600 hover:text-green-700 font-medium">
            Learn more →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const businessSolutions = [
  {
    id: 1,
    title: 'Enterprise Delivery',
    description: 'Customized delivery solutions for large-scale operations'
  },
  {
    id: 2,
    title: 'API Integration',
    description: 'Seamlessly integrate our delivery services into your platform'
  },
  {
    id: 3,
    title: 'Fleet Management',
    description: 'Dedicated fleet management for your business needs'
  }
]
</script>