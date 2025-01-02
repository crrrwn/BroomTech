<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-green-500 to-green-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1 class="text-6xl font-bold mb-6">Deliver Faster</h1>
          <p class="text-2xl mb-4">On-demand delivery platform.</p>
          <p class="text-2xl mb-8">Get your order matched in 3 seconds.</p>
          <button 
            @click="scrollToBooking"
            class="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Book now
          </button>
        </div>
      </div>
    </div>

    <!-- Booking Section -->
    <div id="booking" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Booking Form -->
        <div class="lg:col-span-2">
          <booking-form />
        </div>

        <!-- Services -->
        <div class="lg:col-span-1">
          <h2 class="text-2xl font-bold mb-6">Our Services</h2>
          <div class="space-y-4">
            <div v-for="service in services" :key="service.id" class="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div class="flex items-start">
                <div class="bg-green-100 p-3 rounded-full">
                  <component :is="service.icon" class="w-6 h-6 text-green-600" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium">{{ service.name }}</h3>
                  <p class="text-gray-600">{{ service.description }}</p>
                  <a href="#" class="text-green-600 hover:text-green-700 text-sm font-medium mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Choose Us -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose BroomTech Express?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.id" class="text-center">
            <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="feature.icon" class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-xl font-bold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-green-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p class="text-xl mb-8">Join thousands of satisfied customers using BroomTech Express</p>
        <button class="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
          Sign Up Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Truck, Star, ChartBar } from 'lucide-vue-next'
import BookingForm from '../components/BookingForm.vue'

const services = [
  {
    id: 1,
    name: 'Express Delivery',
    description: 'Fast and reliable delivery for urgent packages',
    icon: Truck
  },
  {
    id: 2,
    name: 'Standard Delivery',
    description: 'Cost-effective solution for regular shipments',
    icon: Truck
  },
  {
    id: 3,
    name: 'Grocery Delivery',
    description: 'Get your groceries delivered to your doorstep',
    icon: Truck
  }
]

const features = [
  {
    id: 1,
    title: 'Fast & Reliable',
    description: 'Our efficient network ensures quick and dependable deliveries.',
    icon: Truck
  },
  {
    id: 2,
    title: 'Top-Rated Drivers',
    description: 'Our drivers are experienced, vetted, and highly rated.',
    icon: Star
  },
  {
    id: 3,
    title: 'Real-Time Tracking',
    description: 'Track your deliveries in real-time with our advanced system.',
    icon: ChartBar
  }
]

const scrollToBooking = () => {
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })
}
</script>