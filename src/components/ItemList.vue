<template>
  <div id="app"></div>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Items</h2>

      <div
        class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="item in this.$store.getters.getMessage"
          :key="item.id"
          :href="'/' + item.id"
          class="group"
        >
          <RouterLink :to="`/ItemDetail/${item.id}`">
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
          </RouterLink>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// import axios from "axios";
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
// import router from "@/router";

const store = useStore();
const data = ref(store.dispatch("getMessageAction"));

onMounted(() => {
  data;
});

// export default {
//   data() {
//     return {
//       products: "products",
//     };
//   },
//   created() {
//     // this.itemDetail();
//     this.item();
//   },
//   methods: {
//     item: function () {
//       this.$store.dispatch("getMessageAction");
//     },
//   },
// };
</script>
