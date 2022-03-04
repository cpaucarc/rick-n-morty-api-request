<template>
  <span
    :class="[
      getStatusClass(),
      'rounded-lg px-2 py-1 text-sm absolute top-2 right-2 font-semibold bg-opacity-70',
    ]"
  >
    {{ status }}
  </span>
</template>

<script>
  export default {
    name: "BadgeStatus",
    props: {
      status: {
        type: String,
        default: "NN",
      },
    },
    setup(props) {
      const getStatusClass = () => {
        if (props.status == "Alive") {
          return "bg-lime-200 text-lime-800";
        } else if (props.status == "Dead") {
          return "bg-rose-300 text-rose-700";
        } else {
          return "bg-blue-200 text-blue-800";
        }
      };

      return { getStatusClass };
    },
  };
</script>