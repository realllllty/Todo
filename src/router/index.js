// Composables
import { createRouter, createWebHistory } from "vue-router";
import Todo from "@/views/Todo";

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
