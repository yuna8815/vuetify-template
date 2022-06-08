import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ("@/App.vue")
    // component: require("@/layout/LoginLayout.vue").default,
    // redirect: "/login",
    // children: [
    //   {
    //       path: "/login",
    //       name: "Login",
    //       component: () =>
    //           import ("@/views/Auth/Login.vue")
    //   },
    // ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router