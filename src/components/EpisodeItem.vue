<template>
  <div class="flex items-center justify-between text-sm">
    <div class="flex items-center">
      <div class="w-16 flex-shrink-0 text-stone-500">
        {{ episode.episode }}
      </div>
      <h3 class="font-bold text-stone-700">
        {{ episode.name }}
      </h3>
    </div>
    <p class="text-stone-500 w-28 flex-shrink-0 text-xs text-right">
      {{ episode.air_date }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      episode: Object,
    },
  };
</script>

<style>
</style>