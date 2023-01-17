import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "@/views/HomeView.vue";
import AboutComponent from "@/views/AboutView.vue";
import BrazilComponent from "@/views/BrazilView.vue";
import HawaiiComponent from "@/views/HawaiiView.vue";
import JamaicaComponent from "@/views/JamaicaView.vue";
import PanamaComponent from "@/views/PanamaView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeComponent },
  { path: "/about", name: "About", component: AboutComponent },
  { path: "/brazil", name: "brazil", component: BrazilComponent },
  { path: "/hawaii", name: "hawaii", component: HawaiiComponent },
  { path: "/jamaica", name: "jamaica", component: JamaicaComponent },
  { path: "/panama", name: "panama", component: PanamaComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
