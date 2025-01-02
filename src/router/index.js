import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BusinessPage from '../views/BusinessPage.vue'
import PersonalPage from '../views/PersonalPage.vue'
import DriverPage from '../views/DriverPage.vue'
import RewardsPage from '../views/RewardsPage.vue'
import CompanyPage from '../views/CompanyPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/business',
    name: 'Business',
    component: BusinessPage
  },
  {
    path: '/personal',
    name: 'Personal',
    component: PersonalPage
  },
  {
    path: '/driver',
    name: 'Driver',
    component: DriverPage
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: RewardsPage
  },
  {
    path: '/company',
    name: 'Company',
    component: CompanyPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router