import { createRouter, createWebHistory } from "vue-router";
import BasicDataView from "../views/BasicDataView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "step-1",
      component: BasicDataView,
    },
    {
      path: "/ods",
      name: "step-2",
      component: () => import("../views/ODSView.vue"),
    },
    {
      path: "/books",
      name: "step-3",
      component: () => import("../views/BooksView.vue"),
    },
    {
      path: "/summary",
      name: "step-4",
      component: () => import("../views/SummaryView.vue"),
    },
  ],
});

export default router;
