import Vue from "vue";
import VueRouter from "vue-router";
import Brawlers from "../views/Brawlers.vue";
import Home from "../views/Home.vue";
import GameModes from "../views/GameModes.vue";
import Maps from "../views/Maps.vue";

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
  {
    path: "/gamemodes",
    name: "GameModes",
    component: GameModes,
  },
  {
    path: "/maps",
    name: "Maps",
    component: Maps,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
