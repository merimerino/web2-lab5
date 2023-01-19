import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "@/views/HomeView.vue";
import EuroToHrk from "@/views/EuroToHrk.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import ExchangeRate from "@/views/ExchangeRateView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeComponent },
  { path: "/euroToHrk", name: "EURO to HRK", component: EuroToHrk },
  { path: "/exchangeRate", name: "EXCHANGE RATES", component: ExchangeRate },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});
export default router;
