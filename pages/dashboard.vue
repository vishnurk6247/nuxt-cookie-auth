<template>
  <h1>Hey Vishnu!</h1>
</template>

<script>
export default {
  middleware: ["auth"],
  async mounted() {
    try {
      await this.$axios.get("http://localhost:8080/dashboard");
    } catch (err) {}
  },
};
</script>
