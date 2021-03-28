import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/views",
    name: "view",
    component: () => import("/@/pages/views/index.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});