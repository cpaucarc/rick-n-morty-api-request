<template>
  <!-- {{ episodes }} -->
  <div class="space-y-4 mt-6">
    <template v-for="episode in episodes" :key="episode.id">
      <episode-item :episode="episode" />
    </template>
  </div>
</template>

<script>
  import { onMounted } from "@vue/runtime-core";
  import useApi from "../hooks/useApi";
  import EpisodeItem from "./EpisodeItem.vue";
  export default {
    name: "EpisodesList",
    components: { EpisodeItem },
    props: {
      episodesArray: {
        type: Array,
        required: true,
        default: null,
      },
    },
    setup(props) {
      const { episodes, getEpisodesOfCharacter } = useApi();

      onMounted(() => {
        getEpisodesOfCharacter(props.episodesArray);
      });

      return { episodes };
    },
  };
</script>

<style>
</style>