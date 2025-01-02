<template>
  <div>
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-green-500 to-green-600 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
      <div class="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <img src="/placeholder.svg?height=400&width=600" alt="Delivery vehicles" class="h-auto w-[600px]" />
      </div>
    </div>

    <!-- Service Cards -->
    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" 
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="p-8">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <component :is="service.icon" class="w-6 h-6 text-green-600" />
              </div>
              <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <a href="#" class="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                {{ service.action }} 
                <ChevronRight class="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-4">Fast. Simple. Affordable.</h2>
            <p class="text-xl text-gray-600 mb-8">Your 24/7 delivery app partner</p>
            <div class="space-y-6">
              <div v-for="feature in features" :key="feature.title" class="flex items-start">
                <div class="flex-shrink-0">
                  <component :is="feature.icon" class="w-6 h-6 text-green-600" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            <button class="mt-8 bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors">
              Book a delivery now
            </button>
          </div>
          <div class="mt-12 lg:mt-0">
            <img src="/placeholder.svg?height=400&width=400" alt="Delivery illustration" class="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>

    <!-- Vehicle Section -->
    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">The right delivery vehicle for all your needs</h2>
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <img src="/placeholder.svg?height=200&width=300" alt="Motorcycle" class="mx-auto mb-6" />
            <h3 class="text-2xl font-bold text-center mb-2">Motorcycle</h3>
            <p class="text-gray-600 text-center">Perfect for small packages and quick deliveries</p>
            <div class="mt-6 text-center">
              <button class="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors">
                Choose this vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- App Section -->
    <div class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-12">Our Apps</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-xl font-bold mb-4">Our Delivery App</h3>
            <img src="/placeholder.svg?height=100&width=100" alt="BroomTech app" class="mx-auto mb-6" />
            <div class="flex justify-center space-x-4">
              <a href="#" class="block">
                <img src="/placeholder.svg?height=40&width=120" alt="App Store" />
              </a>
              <a href="#" class="block">
                <img src="/placeholder.svg?height=40&width=120" alt="Google Play" />
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-xl font-bold mb-4">Our Driver App</h3>
            <img src="/placeholder.svg?height=100&width=100" alt="BroomTech driver app" class="mx-auto mb-6" />
            <div class="flex justify-center space-x-4">
              <a href="#" class="block">
                <img src="/placeholder.svg?height=40&width=120" alt="App Store" />
              </a>
              <a href="#" class="block">
                <img src="/placeholder.svg?height=40&width=120" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-50 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Service</h4>
            <ul class="space-y-3">
              <li v-for="link in footerLinks.service" :key="link">
                <a href="#" class="text-gray-600 hover:text-green-600">{{ link }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul class="space-y-3">
              <li v-for="link in footerLinks.company" :key="link">
                <a href="#" class="text-gray-600 hover:text-green-600">{{ link }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul class="space-y-3">
              <li v-for="link in footerLinks.legal" :key="link">
                <a href="#" class="text-gray-600 hover:text-green-600">{{ link }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a v-for="social in socials" :key="social.name" 
                :href="social.href" 
                class="text-gray-400 hover:text-green-600">
                <component :is="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-gray-200">
          <p class="text-gray-400 text-center">&copy; {{ new Date().getFullYear() }} BroomTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { 
  Briefcase, User, Truck, Clock, DollarSign, MapPin, Shield, 
  ChevronRight, Facebook, Instagram, Youtube, Linkedin 
} from 'lucide-vue-next'

const services = [
  {
    title: 'Business',
    description: 'Last mile delivery solutions for businesses of all sizes',
    action: 'Grow your business',
    icon: Briefcase
  },
  {
    title: 'Personal',
    description: 'Quick on-demand delivery service for all your needs',
    action: 'Check our courier service',
    icon: User
  },
  {
    title: 'Driver',
    description: 'Join our network of professional delivery partners',
    action: 'Become a partner',
    icon: Truck
  }
]

const features = [
  {
    title: 'Affordable rates',
    description: 'Transparent pricing with no hidden costs',
    icon: DollarSign
  },
  {
    title: 'Fast order matching',
    description: 'Match orders and deliver your goods immediately',
    icon: Clock
  },
  {
    title: 'Wide service coverage',
    description: 'Available across major cities in the Philippines',
    icon: MapPin
  },
  {
    title: 'Safe delivery',
    description: 'Professional partner drivers to deliver packages safely',
    icon: Shield
  }
]

const footerLinks = {
  service: ['Business', 'Personal', 'Driver', 'Pricing', 'FAQs'],
  company: ['About Us', 'Deliver Care', 'Blog', 'Careers', 'Contact Us'],
  legal: ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy']
}

const socials = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' }
]

const scrollToBooking = () => {
  // Implement smooth scroll to booking section
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
}
</script>