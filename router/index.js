import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/views",
    name: "view",
    component: () => import("/@/pages/views/index.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("/@/pages/user/index.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});