const isDev = process.env.NODE_ENV === "development";

export default {
  ssr: isDev,
  target: "static",
  generate: {
    dir: "public",
    subFolders: false,
    fallback: true, // Sets 404.html as the fallback page. It helps to render pages with dynamic route on reload when hosted on firebase
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-cookie-auth",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["@nuxtjs/axios"], ["@nuxtjs/auth-next"]],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  auth: {
    redirect: {
      login: "/",
      logout: "/",
    },
    strategies: {
      local: false,
      cookie: {
        cookie: {
          // (optional) If set, we check this cookie existence for loggedIn check
          name: "user_token",
        },
        endpoints: {
          login: {
            url: `https://be-portal-test.herokuapp.com/api/auth/v1/login`,
            method: "post",
            // withCredentials: true,
          },
          logout: {
            url: `https://be-portal-test.herokuapp.com/api/auth/v1/logout`,
            method: "post",
          },
          user: false,
        },
      },
    },
    plugins: [{ src: "~/plugins/axios.js", ssr: false }, "~/plugins/auth.js"],
  },
};
