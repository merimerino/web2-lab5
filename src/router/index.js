import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "@/views/HomeView.vue";
import EuroToHrk from "@/views/EuroToHrk.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomeComponent },
  { path: "/euroToHrk", name: "EURO to HRK", component: EuroToHrk },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
