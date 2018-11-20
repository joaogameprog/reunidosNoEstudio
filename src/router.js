import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
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
      path: "/contato",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
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
