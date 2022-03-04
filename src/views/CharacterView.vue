<template>
  <p v-if="loading">Loading</p>

  <div v-if="character" class="grid grid-cols-8 gap-10">
    <div class="col-span-2">
      <img
        :src="character.image"
        :alt="character.name"
        class="w-full rounded-lg grayscale"
      />
      <h1 class="font-bold text-xl text-stone-800 my-4">
        {{ character.name }}
      </h1>
    </div>
    <div class="col-span-3 rounded-xl">
      <description-list :character="character" />
    </div>
    <div class="col-span-3 rounded-xl">
      <div class="flex justify-between items-center">
        <h2 class="font-bold text-stone-600">Episodes</h2>
        <span
          class="bg-stone-200 text-stone-600 rounded-full px-2 py-1 text-xs"
        >
          {{ character.episode.length }} appe
        </span>
      </div>
      <episodes-list :episodes-array="character.episode" />
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  import useApi from "../hooks/useApi";
  import DescriptionList from "../components/DescriptionList.vue";
  import EpisodesList from "../components/EpisodesList.vue";

  export default {
    name: "CharacterView",
    components: { DescriptionList, EpisodesList },
    setup(props) {
      const id = ref(1);
      const loading = ref(true);
      const route = useRoute();
      const { character, getCharacter } = useApi();
      console.log(props);

      onMounted(() => {
        id.value = route.params.id;
        getCharacter(id.value);
        loading.value = false;
      });

      return { character, loading };
    },
  };
</script>

<style>
</style>