import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TeamView from "../views/TeamView.vue";
import ContactView from "../views/ContactView.vue";
import TeamProfile from "../components/TeamProfile.vue";
import TeamProjects from "../components/TeamProjects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/team",
    name: "Team",
    component: TeamView,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "/team/profile",
        name: "Team Profile",
        component: TeamProfile,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "/team/projects",
        name: "Team Projects",
        component: TeamProjects,
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
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
