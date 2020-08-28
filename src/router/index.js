import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('../views/Home'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/pages/Login'),
    meta: {
      requiresLogged: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/pages/Register'),
    meta: {
      requiresLogged: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/auth/pages/Logout'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('../views/content/ContentIndex'),
    children: [
      {
        path: '',
        name: 'ContentHome',
        component: () => import('../views/content/pages/Home'),
      },
      {
        path: '/content/settings',
        name: 'Settings',
        component: () => import('../views/content/pages/Settings'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router