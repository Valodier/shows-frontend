import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowsIndex from "../views/ShowsIndex.vue";
import ShowsCreate from "../views/ShowsCreate.vue";
import ShowsShow from "../views/ShowsShow.vue";
import ShowsEdit from "../views/ShowsEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shows",
    name: "shows",
    component: ShowsIndex,
  },
  {
    path: "/shows/new",
    name: "shows-new",
    component: ShowsCreate,
  },
  {
    path: "/shows/:id",
    name: "shows-show",
    component: ShowsShow,
  },
  {
    path: "/shows/:id/edit",
    name: "shows-edit",
    component: ShowsEdit,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
