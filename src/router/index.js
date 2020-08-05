import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { headerAbsoulte: true }
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: () => import("../views/About.vue")
  },
  {
    path: "/servicios",
    name: "servicios",
    component: () => import("../views/Services.vue")
  },
  {
    path: "/galeria",
    name: "gallery",
    component: () => import("../views/Gallery.vue")
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () => import("../views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
