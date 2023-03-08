import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import ItemListView from "../views/ItemListView.vue";
import ItemDetailView from "../views/ItemDetailView.vue";
import CartView from "../views/CartView.vue";
import PurchaseConfView from "../views/PurchaseConfView.vue";
import ThanksView from "../views/ThanksView.vue";
import HistoriesView from "../views/HistoriesView.vue";
import UserEditView from "../views/UserEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/TheWelcome",
      name: "SignIn",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    { path: "/SignUp", name: "SignUp", component: SignUpView },
    { path: "/", name: "ItemList", component: ItemListView },
    {
      path: "/ItemDetail/:id",
      name: "ItemDetail",
      component: ItemDetailView,
      props: true,
    },
    { 
      path: "/CartItems",
      name: "Cart",
      component: CartView,
    },
    {
      path: "/PurchaseConf",
      name: "PurchaseConf",
      component: PurchaseConfView,
    },
    {
      path: "/ThankYou",
      name: "ThankYou",
      component: ThanksView,
    },
    {
      path: "/PurchaseHistories",
      name: "PurchaseHistories",
      component: HistoriesView,
    },
    {
      path: "/UserEdit",
      name: "UserEdit",
      component: UserEditView,
    },
  ],
});

export default router;
