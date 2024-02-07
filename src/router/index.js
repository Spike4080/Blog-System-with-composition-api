import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Create from "../views/Create.vue";
import Tag from "../views/Tag.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "detail",
    component: Detail,
    props: true,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
  },
  {
    path: "/tags/:tag",
    name: "tag",
    component: Tag,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
