<template>
  <header class="text-gray-600 body-font">
    <div class="bg-indigo-500">
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <RouterLink
          to="/TheWelcome"
          class="mr-5 hover:text-gray-900"
          v-show="isVisible()"
          >SignIn</RouterLink
        >
        <RouterLink to="/SignUp" class="mr-5 hover:text-gray-900"
          >SignUp</RouterLink
        >
        <RouterLink to="/" class="mr-5 hover:text-gray-900">Items</RouterLink>
        <RouterLink to="/CartItems" class="mr-5 hover:text-gray-900"
          >Cart</RouterLink
        >
        <RouterLink to="/PurchaseHistories" class="mr-5 hover:text-gray-900"
          >Histories</RouterLink
        >
        <RouterLink to="/UserEdit" class="mr-5 hover:text-gray-900"
          >UserEdit</RouterLink
        >
      </nav>
      <form
        @submit.prevent="logout"
        method="POST"
        v-show="isVisibleOut()"
        to="/TheWelcome"
      >
        <button @click="refresh">LogOut</button>
      </form>
    </div>
  </header>
</template>

<script setup>
import { useCookies } from "vue3-cookies";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userId = ref(true);
const userId2 = ref(false);

onMounted(() => {
  isVisible();
  isVisibleOut();
});

function logout() {
  const { cookies } = useCookies();
  cookies.remove("id");
  router.push({ path: "/" });
}

function isVisible() {
  const user = document.cookie;
  const userId = user.slice(3);
  return userId === "";
}

function isVisibleOut() {
  const user = document.cookie;
  // console.log(document.cookie);
  const userId2 = user.slice(3);
  return userId2 !== "";
}

function refresh() {
  location.reload();
}
// import { useCookies } from "vue3-cookies";
// export default {
//   data() {
//     return {
//       userId: true,
//       userId2: false,
//     };
//   },
//   mounted() {
//     this.isVisible();
//     this.isVisibleOut();
//   },
//   methods: {
//     logout: function () {
//       const { cookies } = useCookies();
//       cookies.remove("id");
//       this.$router.push({ path: "/" });
//     },
//     isVisible: function () {
//       const user = document.cookie;
//       const userId = user.slice(3);
//       return userId === "";
//     },
//     isVisibleOut: function () {
//       const user = document.cookie;
//       // console.log(document.cookie);
//       const userId2 = user.slice(3);
//       return userId2 !== "";
//     },
//   },
// };
</script>
