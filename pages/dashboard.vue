<template>
  <div style="width: max-content; margin: 100px auto">
    <h1>Hey User!</h1>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Failed loading resource</p>
    <p v-else>View Dashboard</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  data() {
    return {
      loading: false,
      error: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.error = false;
        this.loading = true;
        await this.$axios.get(
          "https://be-portal-test.herokuapp.com/api/portal/v1/demo"
        );
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.error = true;
      }
    },
    async logout() {
      try {
        await this.$auth.logout();
      } catch (err) {}
    },
  },
};
</script>
