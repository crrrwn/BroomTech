import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBM4klfE6RdFU2b_4p_HqEGQsGwpUk4DY8",
  authDomain: "broomtech-fef68.firebaseapp.com",
  databaseURL: "https://broomtech-fef68-default-rtdb.firebaseio.com",
  projectId: "broomtech-fef68",
  storageBucket: "broomtech-fef68.firebasestorage.app",
  messagingSenderId: "656202141072",
  appId: "1:656202141072:web:5dc66bbcc44e8ede83b715",
  measurementId: "G-W2Q7ZVEHSR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };