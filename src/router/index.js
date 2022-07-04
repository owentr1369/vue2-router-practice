import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "js/routes/foo" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "js/routes/foo" */ "../views/AboutView.vue"),
  },
  {
    path: "/team",
    name: "Team",
    // component: TeamView,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "/team/profile",
        name: "Team Profile",
        component: () =>
          import(
            /* webpackChunkName: "js/routes/foo" */ "../views/AboutView.vue"
          ),
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "/team/projects",
        name: "Team Projects",
        // component: TeamProjects,
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    // component: ContactView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.name}  | Vue.js`;
  next();
});
export default router;
