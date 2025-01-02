<template>
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Rewards Program</h1>
        <div class="bg-white rounded-lg shadow-sm p-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="tier in rewardTiers" :key="tier.name" 
              class="text-center p-6 rounded-lg border">
              <h3 class="text-xl font-semibold mb-2">{{ tier.name }}</h3>
              <p class="text-gray-600 mb-4">{{ tier.description }}</p>
              <ul class="text-left space-y-2">
                <li v-for="benefit in tier.benefits" :key="benefit" 
                  class="flex items-center">
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
  const rewardTiers = [
    {
      name: 'Silver',
      description: 'Start earning rewards',
      benefits: ['5% cashback', 'Priority support']
    },
    {
      name: 'Gold',
      description: 'Enhanced benefits',
      benefits: ['10% cashback', '24/7 support', 'Free delivery monthly']
    },
    {
      name: 'Platinum',
      description: 'Premium experience',
      benefits: ['15% cashback', 'Dedicated support', 'Unlimited free delivery']
    }
  ]
  </script>