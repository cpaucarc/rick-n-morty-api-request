<template>
  <dl class="flex items-center px-4 py-2 bg-stone-200 rounded-lg">
    <dt class="text-stone-500 font-bold text-sm w-20">
      {{ title }}
    </dt>
    <dd class="text-stone-800 flex-1">
      {{ description }}
    </dd>
  </dl>
</template>

<script>
  export default {
    name: "DescriptionItem",
    props: {
      title: String,
      description: String,
    },
  };
</script>