<template>
  page is {{ page }}
  <br />
  <button @click="changePage(prev)">Prev</button>
  <button @click="changePage(next)">Next</button>
</template>

<script>
  import { inject } from "vue";
  export default {
    props: {
      prev: {
        type: String,
        default: "",
      },
      next: {
        type: String,
        default: "",
      },
    },
    setup() {
      const page = inject("page");

      const changePage = (url) => {
        page.value = url;
      };

      return { page, changePage };
    },
  };
</script>

<style>
</style>