<template>
  <div class="min-h-full bg-stone-100">
    <the-navbar />

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <router-view />
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
  import TheNavbar from "./components/TheNavbar.vue";

  export default {
    name: "App",
    components: { TheNavbar },
  };
</script>