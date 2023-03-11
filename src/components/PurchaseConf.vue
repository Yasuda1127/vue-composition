<template>
  <body class="overflow-y-hidden dark:bg-gray-900">
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div class="flex justify-start item-start space-y-2 flex-col">
        <h1
          class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800"
        >
          Order #13432
        </h1>
        <p
          class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600"
        >
          21st Mart 2021 at 10:34 PM
        </p>
      </div>
      <div
        class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0"
      >
        <div
          class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8"
        >
          <div
            class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
          >
            <p
              class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800"
            >
              Customer’s Cart
            </p>

            <div v-for="item in purchaseConf" :key="item.id">
              <div
                v-if="!item.deleted"
                class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
              >
                <div class="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    class="w-full hidden md:block"
                    :src="item.imageUrl"
                    alt="dress"
                  />
                </div>
                <div
                  class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0"
                >
                  <div
                    class="w-full flex flex-col justify-start items-start space-y-8"
                  >
                    <h3
                      class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800"
                    >
                      {{ item.name }}
                    </h3>
                    <div
                      class="flex justify-start items-start flex-col space-y-2"
                    >
                      <p
                        class="text-sm dark:text-white leading-none text-gray-800"
                      >
                        <span class="dark:text-gray-400 text-gray-300"
                          >Style:
                        </span>
                        {{ item.category }}
                      </p>
                      <p
                        class="text-sm dark:text-white leading-none text-gray-800"
                      >
                        <span class="dark:text-gray-400 text-gray-300"
                          >Countity:
                        </span>
                        {{ item.countity }}
                      </p>
                      <p
                        class="text-sm dark:text-white leading-none text-gray-800"
                      >
                        <span class="dark:text-gray-400 text-gray-300"
                          >Color:
                        </span>
                        Light Blue
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex justify-between space-x-8 items-start w-full"
                  >
                    <p class="text-base dark:text-white xl:text-lg leading-6">
                      ¥{{ item.price }}
                    </p>
                    <p
                      class="text-base dark:text-white xl:text-lg leading-6 text-gray-800"
                    >
                      {{ item.id }}
                    </p>
                    <p
                      class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800"
                    >
                      ¥{{ item.priceCalc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full"
            ></div>
          </div>
          <div
            class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8"
          >
            <div
              class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6"
            >
              <h3
                class="text-xl dark:text-white font-semibold leading-5 text-gray-800"
              >
                Summary
              </h3>
              <div
                class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4"
              >
                <div class="flex justify-between w-full">
                  <p class="text-base dark:text-white leading-4 text-gray-800">
                    Subtotal
                  </p>
                  <p
                    class="text-base dark:text-gray-300 leading-4 text-gray-600"
                  >
                    $56.00
                  </p>
                </div>
                <div class="flex justify-between items-center w-full">
                  <p class="text-base dark:text-white leading-4 text-gray-800">
                    Discount
                    <span
                      class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800"
                      >STUDENT</span
                    >
                  </p>
                  <p
                    class="text-base dark:text-gray-300 leading-4 text-gray-600"
                  >
                    -$28.00 (50%)
                  </p>
                </div>
                <div class="flex justify-between items-center w-full">
                  <p class="text-base dark:text-white leading-4 text-gray-800">
                    Shipping
                  </p>
                  <p
                    class="text-base dark:text-gray-300 leading-4 text-gray-600"
                  >
                    $8.00
                  </p>
                </div>
              </div>
              <div class="flex justify-between items-center w-full">
                <p
                  class="text-base dark:text-white font-semibold leading-4 text-gray-800"
                >
                  Total
                </p>
                <p
                  class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600"
                >
                  ¥{{ totalArray2 }}
                </p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6"
            >
              <h3
                class="text-xl dark:text-white font-semibold leading-5 text-gray-800"
              >
                Shipping
              </h3>
              <div class="flex justify-between items-start w-full">
                <div class="flex justify-center items-center space-x-4">
                  <div class="w-8 h-8">
                    <img
                      class="w-full h-full"
                      alt="logo"
                      src="https://i.ibb.co/L8KSdNQ/image-3.png"
                    />
                  </div>
                  <div class="flex flex-col justify-start items-center">
                    <p
                      class="text-lg leading-6 dark:text-white font-semibold text-gray-800"
                    >
                      DPD Delivery<br /><span class="font-normal"
                        >Delivery with 24 Hours</span
                      >
                    </p>
                  </div>
                </div>
                <p
                  class="text-lg font-semibold leading-6 dark:text-white text-gray-800"
                >
                  $8.00
                </p>
              </div>
              <div class="w-full flex justify-center items-center">
                <form
                  method="POST"
                  @submit.prevent="purchaseHistoriesAdd(purchaseConf)"
                >
                  <button
                    class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white"
                  >
                    購入する
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col"
        >
          <h3
            class="text-xl dark:text-white font-semibold leading-5 text-gray-800"
          >
            Customer
          </h3>
          <div
            class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0"
          >
            <div class="flex flex-col justify-start items-start flex-shrink-0">
              <div
                class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200"
              >
                <img
                  src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                  alt="avatar"
                />
                <div class="flex justify-start items-start flex-col space-y-2">
                  <p
                    class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800"
                  >
                    {{ users.firstName }} {{ users.lastName }}
                  </p>
                  <p class="text-sm dark:text-gray-300 leading-5 text-gray-600">
                    10 Previous Orders
                  </p>
                </div>
              </div>

              <div
                class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full"
              >
                <img
                  class="dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                  alt="email"
                />
                <img
                  class="hidden dark:block"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                  alt="email"
                />
                <p class="cursor-pointer text-sm leading-5">
                  {{ users.email }}
                </p>
              </div>
            </div>
            <div
              class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0"
            >
              <div
                class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start"
              >
                <div
                  class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8"
                >
                  <p
                    class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800"
                  >
                    Shipping Address
                  </p>
                  <p
                    class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
                  >
                    {{ users.region }} {{ users.city }}
                  </p>
                </div>
                <div
                  class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4"
                >
                  <p
                    class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800"
                  >
                    Billing Address
                  </p>
                  <p
                    class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
                  >
                    {{ users.streetAddress }}
                  </p>
                </div>
              </div>
              <div
                class="flex w-full justify-center items-center md:justify-start md:items-start"
              >
                <button
                  class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800"
                >
                  Edit Details
                </button>
                <!-- <div v-for="item in purchaseConf[0]" :key="item.id">
                  <form
                    method="DELETE"
                    @submit.prevent="purchaseLeave()"
                  >
                    <button>削除</button>
                  </form>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import axios from "axios";
import { useCookies } from "vue3-cookies";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const purchaseConf = ref("purchaseConf");
const users = ref("users");
const totalArray2 = ref(0);

onMounted(() => {
  purchaseConfs();
  userData();
  totalPrice();
});

onUnmounted(() => {
  purchaseLeave();
});

function purchaseConfs() {
  const user = document.cookie;
  const userId = user.slice(3);
  axios
    .get(`http://localhost:8002/purchaseConf/` + "?" + "userId" + "=" + userId)
    .then((response) => {
      // console.log(response);
      purchaseConf.value = response.data;
      // console.log(this.purchaseConf);
    });
}

function userData() {
  const user = document.cookie;
  const userId = user.slice(3);
  axios
    .get(`http://localhost:8002/users/` + "?" + "id" + "=" + userId)
    .then((response) => {
      users.value = response.data[0];
    });
}

function totalPrice() {
  const user = document.cookie;
  const userId = user.slice(3);
  let totalArray = [];

  axios
    .get(`http://localhost:8002/purchaseConf/` + "?" + "userId" + "=" + userId)
    .then((response) => {
      // console.log(response);
      purchaseConf.value = response.data;
      let total = 0;

      purchaseConf.value.forEach(function (item) {
        if (item.deleted === false) {
          total = total + item.price * item.countity;
        }
      });
      console.log(total);
      totalArray.push(total);
      console.log(totalArray[0]);
      totalArray2.value = totalArray[0];
      console.log(totalArray2.value)
    });
}

function purchaseHistoriesAdd() {
  purchaseConf.value.forEach((item) => {
    let id = item.id;
    axios
      .post(`http://localhost:8002/purchaseHistories/`, item)
      .then((response) => {
        router.push({ path: "/ThankYou" });
      });
    axios.patch(`http://localhost:8002/carts/` + id, {
      deleted: true,
    });
    axios.patch(`http://localhost:8002/purchaseConf/` + id, {
      deleted: true,
    });
  });
}

function purchaseLeave() {
  //画面遷移時に購入確認から物理削除
  let values = purchaseConf.value.filter((item) => item.deleted === false);
  console.log(values);
  values.forEach((value) => {
    let id = Number(value.id);
    console.log(id);
    axios
      .delete(`http://localhost:8002/purchaseConf/` + id)
      .then((response) => console.log(response.data));
  });
}

// export default {
//   data() {
//     return { purchaseConf: "purchaseConf", users: "users" ,totalArray:[]};
//   },
//   mounted() {
//     this.purchaseConfs();
//     this.userData();
//     this.totalPrice();
//   },
//   unmounted() {
//     this.purchaseLeave();
//   },
//   methods: {
//     purchaseConfs: function () {
//       const user = document.cookie;
//       const userId = user.slice(3);
//       axios
//         .get(
//           `http://localhost:8002/purchaseConf/` + "?" + "userId" + "=" + userId
//         )
//         .then((response) => {
//           // console.log(response);
//           this.purchaseConf = response.data;
//           // console.log(this.purchaseConf);
//         });
//     },
//     userData: function () {
//       const user = document.cookie;
//       const userId = user.slice(3);
//       axios
//         .get(`http://localhost:8002/users/` + "?" + "id" + "=" + userId)
//         .then((response) => {
//           this.users = response.data[0];
//         });
//     },
//     totalPrice: function () {
//       const user = document.cookie;
//       const userId = user.slice(3);
//       let totalArray = [];

//       axios
//         .get(
//           `http://localhost:8002/purchaseConf/` + "?" + "userId" + "=" + userId
//         )
//         .then((response) => {
//           // console.log(response);
//           this.purchaseConf = response.data;
//           console.log(this.purchaseConf);
//           let total = 0;

//           this.purchaseConf.forEach(function (item) {
//             if (item.deleted === false) {
//               total = total + item.price * item.countity;
//             }
//           });
//           console.log(total);
//           totalArray.push(total);
//           this.totalArray = totalArray;
//         });
//     },
//     purchaseHistoriesAdd: function (purchaseConf) {
//       purchaseConf.forEach((item) => {
//         let id = item.id;
//         axios
//           .post(`http://localhost:8002/purchaseHistories/`, item)
//           .then((response) => {
//             this.$router.push({ path: "/ThankYou" });
//           });
//         axios.patch(`http://localhost:8002/carts/` + id, {
//           deleted: true,
//         });
//         axios.patch(`http://localhost:8002/purchaseConf/` + id, {
//           deleted: true,
//         });
//       });
//     },
//     purchaseLeave: function () {
//       //画面遷移時に購入確認から物理削除
//       let values = this.purchaseConf.filter((item) => item.deleted === false);
//       console.log(values);
//       values.forEach((value) => {
//         let id = Number(value.id);
//         console.log(id);
//         axios
//           .delete(`http://localhost:8002/purchaseConf/` + id)
//           .then((response) => console.log(response.data));
//       });
//     },
//   },
// };
</script>
