import { ref } from "vue";

export default function useApi() {
    const character = ref(null);
    const characters = ref([]);
    const episodes = ref([]);

    const getCharactersFromApi = async (url) => {
        const res = await fetch(url ?? 'https://rickandmortyapi.com/api/character');
        const data = await res.json();
        characters.value = data;
        // console.log(data);
    }

    const getCharacter = async (id) => {
        // console.log({ id });
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        character.value = data;
        // console.log({ data });
    }

    const getEpisodesOfCharacter = (episodesURL) => {
        // console.log('******');
        // console.log(episodesURL);
        episodesURL.forEach(async episode => {
            const res = await fetch(episode);
            const data = await res.json();
            episodes.value.push(data);
        })
        // console.log(episodes.value);
        // console.log('******');
    }

    return {
        characters,
        getCharactersFromApi,
        character,
        getCharacter,
        episodes,
        getEpisodesOfCharacter
    }
}