<template>
  <ul class="space-y-2">
    <li>
      <description-item title="Status" :description="character.status" />
    </li>
    <li>
      <description-item title="Species" :description="character.species" />
    </li>
    <li>
      <description-item title="Gender" :description="character.gender" />
    </li>
    <li>
      <description-item title="Origin" :description="character.origin.name" />
    </li>
    <li>
      <description-item
        title="Location"
        :description="character.location.name"
      />
    </li>
  </ul>
</template>

<script>
  import DescriptionItem from "./DescriptionItem.vue";
  export default {
    name: "DescriptionList",
    components: { DescriptionItem },
    props: {
      character: Object,
    },
  };
</script>

<style>
</style>
DescriptionItem