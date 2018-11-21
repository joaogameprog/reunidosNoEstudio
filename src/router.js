import Vue from "vue";
import Router from "vue-router";
import Teaser from "./views/Teaser.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "teaser"
    },
    {
      path: "/home",
      name: "home",
      redirect: "teaser"
    },
    {
      path: "/teaser",
      name: "teaser",
      component: Teaser
    },
    {
      path: "/episodios",
      name: "episodes",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Episodes.vue")
    },
    {
      path: "/discos",
      name: "discs",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Discs.vue")
    },
    {
      path: "/sobre",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/instagram",
      name: "photos",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Photos.vue")
    },
    {
      path: "/plugins",
      name: "plugins",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/plugins.vue")
    }
  ]
});
