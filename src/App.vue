<script setup >
import { RouterLink, RouterView } from "vue-router";
import HeaderView from "../src/views/HeaderView.vue";
</script>

<template>
  <div class="main-wrapper">
    <header>
      <HeaderView />
      <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/SignUp">SignUp</RouterLink>
      <RouterLink to="/ItemList">Items</RouterLink>
      <RouterLink to="/CartItems">Cart</RouterLink>
    </nav>  -->
    </header>

    <body>
      <RouterView />
    </body>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100vw;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  background-size: cover;
  width: 85vw;
  align-items: center;
  margin: 0;
  padding: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
