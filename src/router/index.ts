import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/pages/MainPage.vue";
import Start from "@/pages/StartPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "start",
    component: Start,
  },
  {
    path: "/game",
    name: "game",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
