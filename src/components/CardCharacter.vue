<template>
  <div class="relative rounded-lg overflow-hidden border border-stone-300">
    <img
      :src="character.image"
      :alt="character.name"
      :title="character.name"
      loading="lazy"
      class="grayscale"
    />

    <badge-status
      v-if="character.status == 'Dead'"
      :status="character.status"
    />
    <div class="bg-white p-4">
      <router-link
        class="font-bold text-stone-800 mb-4"
        :to="'/character/' + character.id"
      >
        {{ character.name }}
      </router-link>

      <div class="flex items-center justify-between text-xs mb-2">
        <h2 class="text-stone-700 font-semibold">
          {{ character.species }}
        </h2>
        <h2 class="text-stone-500">{{ character.episode.length }} caps.</h2>
      </div>
      <h3 class="inline-flex text-stone-700 text-sm">
        <LocationMarkerIcon class="flex-shrink-0 w-4 mr-2" />
        {{ character.location.name }}
      </h3>
    </div>
  </div>
</template>

<script>
  import BadgeStatus from "./BadgeStatus.vue";
  import { LocationMarkerIcon } from "@heroicons/vue/solid";
  export default {
    components: { BadgeStatus, LocationMarkerIcon },
    props: {
      character: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style>
</style>