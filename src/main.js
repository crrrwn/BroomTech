import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM4klfE6RdFU2b_4p_HqEGQsGwpUk4DY8",
  authDomain: "broomtech-fef68.firebaseapp.com",
  databaseURL: "https://broomtech-fef68-default-rtdb.firebaseio.com",
  projectId: "broomtech-fef68",
  storageBucket: "broomtech-fef68.firebasestorage.app",
  messagingSenderId: "656202141072",
  appId: "1:656202141072:web:5dc66bbcc44e8ede83b715",
  measurementId: "G-W2Q7ZVEHSR"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

// Create Vue app
const app = createApp(App)

// Use router
app.use(router)

// Mount app
app.mount('#app')

export { db }