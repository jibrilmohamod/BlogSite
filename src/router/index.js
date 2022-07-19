import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  {
   path: "/",
   name: "home",
   component: HomeView,
  },
  {
   path: "/register",
   name: "register",
   component: () => import("../views/TheRegister.vue"),
  },
  {
   path: "/login",
   name: "login",
   component: () => import("../views/TheLogin.vue"),
  },
 ],
})

export default router
