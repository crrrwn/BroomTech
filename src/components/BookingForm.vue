<template>
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6">Book a Delivery</h2>
      
      <div class="flex items-center justify-between mb-8">
        <div v-for="(step, index) in steps" :key="step.id" class="flex items-center">
          <div 
            class="w-8 h-8 rounded-full flex items-center justify-center"
            :class="[
              currentStep >= index ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
            ]"
          >
            {{ index + 1 }}
          </div>
          <span class="ml-2 text-sm font-medium">{{ step.name }}</span>
          <div 
            v-if="index < steps.length - 1" 
            class="w-16 h-1 mx-4"
            :class="currentStep > index ? 'bg-green-600' : 'bg-gray-200'"
          ></div>
        </div>
      </div>
  
      <!-- Location Step -->
      <div v-if="currentStep === 0">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Pickup Location</label>
            <input 
              v-model="formData.pickupLocation"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Enter pickup address"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Delivery Location</label>
            <input 
              v-model="formData.deliveryLocation"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Enter delivery address"
            >
          </div>
        </div>
      </div>
  
      <!-- Vehicle Step -->
      <div v-if="currentStep === 1">
        <div class="grid grid-cols-3 gap-4">
          <div 
            v-for="vehicle in vehicles" 
            :key="vehicle.id"
            class="border rounded-lg p-4 cursor-pointer"
            :class="formData.vehicle === vehicle.id ? 'border-green-600' : 'border-gray-200'"
            @click="selectVehicle(vehicle.id)"
          >
            <img :src="vehicle.image" :alt="vehicle.name" class="w-full h-32 object-cover mb-2">
            <h3 class="font-medium">{{ vehicle.name }}</h3>
            <p class="text-sm text-gray-600">{{ vehicle.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- Package Step -->
      <div v-if="currentStep === 2">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Package Type</label>
            <select 
              v-model="formData.packageType"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="small">Small Package</option>
              <option value="medium">Medium Package</option>
              <option value="large">Large Package</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Package Weight (kg)</label>
            <input 
              v-model="formData.weight"
              type="number"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
          </div>
        </div>
      </div>
  
      <!-- Payment Step -->
      <div v-if="currentStep === 3">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Payment Method</label>
            <select 
              v-model="formData.paymentMethod"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="cash">Cash</option>
              <option value="card">Credit Card</option>
              <option value="ewallet">E-Wallet</option>
            </select>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Order Summary</h4>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>Delivery Fee</span>
                <span>₱150.00</span>
              </div>
              <div class="flex justify-between">
                <span>Service Fee</span>
                <span>₱50.00</span>
              </div>
              <div class="flex justify-between">
                <span>Total</span>
                <span>₱200.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="mt-8 flex justify-between">
        <button 
          v-if="currentStep > 0"
          @click="previousStep"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button 
          v-if="currentStep < steps.length - 1"
          @click="nextStep"
          class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Next
        </button>
        <button 
          v-else
          @click="submitBooking"
          class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import { collection, addDoc } from 'firebase/firestore';
  import { db } from '../config/firebase';
  
  const steps = [
    { id: 1, name: 'Location' },
    { id: 2, name: 'Vehicle' },
    { id: 3, name: 'Package' },
    { id: 4, name: 'Payment' }
  ];
  
  const currentStep = ref(0);
  
  const formData = reactive({
    pickupLocation: '',
    deliveryLocation: '',
    vehicle: '',
    packageType: '',
    weight: '',
    paymentMethod: ''
  });
  
  const vehicles = [
    { 
      id: 'motorcycle',
      name: 'Motorcycle',
      description: 'Best for small packages',
      image: '/placeholder.svg?height=150&width=150'
    },
    {
      id: 'car',
      name: 'Car',
      description: 'Ideal for medium packages',
      image: '/placeholder.svg?height=150&width=150'
    },
    {
      id: 'van',
      name: 'Van',
      description: 'Perfect for large deliveries',
      image: '/placeholder.svg?height=150&width=150'
    }
  ];
  
  const selectVehicle = (vehicleId) => {
    formData.vehicle = vehicleId;
  };
  
  const nextStep = () => {
    if (currentStep.value < steps.length - 1) {
      currentStep.value++;
    }
  };
  
  const previousStep = () => {
    if (currentStep.value > 0) {
      currentStep.value--;
    }
  };
  
  const submitBooking = async () => {
    try {
      const bookingRef = await addDoc(collection(db, 'bookings'), {
        ...formData,
        status: 'pending',
        createdAt: new Date(),
      });
      console.log('Booking created with ID:', bookingRef.id);
      // Handle success (e.g., show success message, redirect to tracking page)
    } catch (error) {
      console.error('Error creating booking:', error);
      // Handle error
    }
  };
  </script>