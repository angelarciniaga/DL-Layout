import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'Login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Registro.vue')
  },
  {
    path: '*/',
    name: 'Vista404',
    component: () => import('../views/Vista404.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/editando',
    name: 'Editando',
    component: () => import('../views/Editando.vue'),
    meta: {
      login: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let valido = to.matched.some(ruta => ruta.meta.login);

  if(!user && valido) {
    next('home')
  }else {
    next();
  }
})

export default router
