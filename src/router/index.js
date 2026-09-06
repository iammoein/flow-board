import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_NAMES, ROUTE_PATHS } from "@/constants/routes.contant";

import Dashboard from "@/views/dashboard.view.vue";
import Issues from "@/views/issues.view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE_PATHS.DASHBOARD,
      name: ROUTE_NAMES.DASHBOARD,
      component: Dashboard,
    },
    {
      path: ROUTE_PATHS.ISSUES,
      name: ROUTE_NAMES.ISSUES,
      component: Issues,
    },
  ],
});

export default router;
