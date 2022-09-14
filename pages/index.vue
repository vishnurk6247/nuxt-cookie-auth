<template>
  <div style="margin: 60px auto; width: max-content">
    <div>
      <nuxt-link to="/dashboard">Dashboard</nuxt-link>
    </div>
    <div>
      <h1>Login using nuxt-auth!</h1>
      <div
        style="width: 360px; display: flex; flex-direction: column; gap: 15px"
      >
        <input v-model="username" />
        <input v-model="password" type="password" />
        <button style="width: 150px; margin: 0 auto" @click="login">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        if (!this.username || !this.password) return;
        await this.$auth.loginWith("cookie", {
          data: {
            username: this.username,
            password: this.password,
          },
        });
        // this.$store.dispatch("login");
        this.$router.push("/dashboard");
      } catch (err) {}
    },
  },
};
</script>
