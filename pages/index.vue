<template>
  <div>
    <div>
      <nuxt-link to="/dashboard">Dashboard</nuxt-link>
    </div>
    <div>
      <h1>Login using nuxt-auth!</h1>
      <button @click="login">Login</button>
    </div>
    <!-- <div>
      <h1>Login using custom functionality!</h1>
      <button @click="$router.push('/dashboard')">Login</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("cookie", {
          data: {
            username: "<>",
            password: "<>",
          },
        });
        // this.$store.dispatch("login");
        this.$router.push("/dashboard");
      } catch (err) {}
    },
  },
};
</script>
