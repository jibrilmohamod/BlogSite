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
   // route level code-splitting
   // this generates a separate chunk (register.[hash].js) for this route
   // which is lazy-loaded when the route is visited.
   component: () => import("../views/TheRegister.vue"),
  },
 ],
})

export default router
