import Vue from "vue";
import VueRouter from "vue-router";
import Brawlers from "../views/Brawlers.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/brawlers",
    name: "Brawlers",
    component: Brawlers,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
