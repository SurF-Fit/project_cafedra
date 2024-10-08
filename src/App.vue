<script>
  import OwnerService from '@/api-services/owner.service';

  defineProps({
    description: String,
  });

  export default {
    items: [],
    error: [],
    created() {
      OwnerService.getAll().then((response) => {
        this.items = response.data;
        console.log(response.data);
      }).catch((error) => {
        console.log(error.response.data);
      });
    }
  };
</script>

<template>
  <header class="wrapper">
    <a href="#">оформленные заказы</a>
    <a href="#">корзина</a>
    <img src="../public/logo.png" alt="logo">
  </header>
  <main v-if="items">
    <div v-for="item in items">
      <ProductScreen :description="item.description"></ProductScreen>
    </div>

  </main>
</template>

<style scoped>
  root {
    font-size: 14px;
  }

  header {
    display: flex;
    width: 80vw;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 2rem;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    width: 80px;
  }

  img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  main {
    display: flex;
    height: 100vh;
  }

  main div div {
    height: 100vh;
  }
</style>
