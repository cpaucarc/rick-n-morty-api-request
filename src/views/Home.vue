<template>
  <!-- {{ characters.info }} -->
  <br />
  <div v-if="characters" class="grid grid-cols-4 gap-8">
    <div class="bg-stone-200 rounded-lg p-6" />
    <div class="col-span-3">
      <home-paginator
        :prev="characters.info.prev"
        :next="characters.info.next"
      />
      <div class="grid grid-cols-4 gap-x-8 gap-y-10">
        <template v-for="character in characters.results" :key="character.id">
          <card-character :character="character" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, provide, ref, watch } from "vue";
  import useApi from "../hooks/useApi";
  import CardCharacter from "../components/CardCharacter.vue";
  import HomePaginator from "../components/HomePaginator.vue";

  export default {
    name: "Home",
    components: { CardCharacter, HomePaginator },
    setup() {
      const page = ref(null);
      const { characters, getCharactersFromApi } = useApi();

      getCharactersFromApi(page.value);

      watch(() => {
        page() {
 getCharactersFromApi(page.value)
        }
      });

      provide("page", page);

      return { characters };
    },
  };
</script>