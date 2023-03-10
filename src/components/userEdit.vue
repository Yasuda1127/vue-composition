<template>
  <div class="mt-10 sm:mt-20">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="pl-6">
          <!-- <h3 class="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p> -->
        </div>
      </div>

      <div class="mt-5 md:col-span-2 md:mt-0 pr-6">
        <form action="#" method="PATCH" @submit.prevent="userEdit(user)">
          <div class="overflow-hidden shadow sm:rounded-md" :key="user.id">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="firstName"
                    class="block text-sm font-medium text-gray-700"
                    >姓</label
                  >
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autocomplete="given-name"
                    v-model="user.firstName"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="lastName"
                    class="block text-sm font-medium text-gray-700"
                    >名</label
                  >
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autocomplete="family-name"
                    v-model="user.lastName"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >メールアドレス</label
                  >
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    v-model="user.email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >パスワード</label
                  >
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="address-level2"
                    v-model="user.password"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <!-- <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>日本</option>
                  <option>アメリカ</option>
                  <option>中国</option>
                </select> -->
                </div>

                <div class="col-span-6 sm:col-span-5">
                  <label
                    for="postCode"
                    class="block text-sm font-medium text-gray-700"
                    >郵便番号</label
                  >
                  <input
                    type="text"
                    name="postCode"
                    id="postCode"
                    autocomplete="postCode"
                    v-model="user.postCode"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    for="region"
                    class="block text-sm font-medium text-gray-700"
                    >都道府県</label
                  >
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
                    v-model="user.region"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                    >市区町村</label
                  >
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autocomplete="address-level2"
                    v-model="user.city"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="streetAddress"
                    class="block text-sm font-medium text-gray-700"
                    >字丁目以下の住所</label
                  >
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    autocomplete="streetAddress"
                    v-model="user.streetAddress"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = ref("user");

onMounted(() => {
  userInfo();
});

function userInfo() {
  const user1 = document.cookie;
  const userId = user1.slice(3);
  axios
    .get("http://localhost:8002/users/" + "?" + "id" + "=" + userId)
    .then((response) => {
      response.data = response.data[0];
      user.value = response.data;
    });
}
function userEdit(user) {
  let id = user.id;
  axios
    .patch(`http://localhost:8002/users/` + id, this.user)
    .then((response) => {
      console.log(response.data);
    });
}
// import axios from "axios";
// export default {
//   data() {
//     return {
//       user: "user",
//     };
//   },
//   mounted() {
//     this.userInfo();
//   },
//   methods: {
//     userInfo: function () {
//       const user = document.cookie;
//       const userId = user.slice(3);
//       axios
//         .get("http://localhost:8002/users/" + "?" + "id" + "=" + userId)
//         .then((response) => {
//           this.user = response.data[0];
//           console.log(this.user);
//         });
//     },
//     userEdit: function (user) {
//       let id = user.id;
//       axios
//         .patch(`http://localhost:8002/users/` + id, this.user)
//         .then((response) => {
//           console.log(response.data);
//         });
//     },
//   },
// };
</script>
