<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Items</h2>

      <div
        class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="item in purchaseHistories" :key="item.id" class="group">
          <div v-if="!item.deleted">
            <div
              class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
            >
              <a>
                <img
                  :src="item.imageUrl"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </a>
            </div>

            <h3 class="mt-4 text-sm text-gray-700">{{ item.name }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ item.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { Item } from "../../types/type";

export default {
  data() {
    return {
      purchaseHistories: "purchaseHistories",
      item: "item",
    };
  },
  mounted() {
    this.purchaseHis();
  },
  methods: {
    purchaseHis: function () {
      const user = document.cookie;
      const userId = user.slice(3);
      axios
        .get(
          `http://localhost:8002/purchaseHistories/` +
            "?" +
            "userId" +
            "=" +
            userId
        )
        .then((response) => {
          // console.log(response);
          this.purchaseHistories = response.data;
          console.log(this.purchaseHistories);
        });
    },
  },
};
</script>
