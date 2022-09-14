export default function ({ $axios, redirect, $auth }) {
  $axios.onRequest((config) => {});

  $axios.onError((error) => {
    // const code = parseInt(error.response && error.response.status);
    // if (code === 401) {
    //   if ($auth.loggedIn) {
    //     $auth.logout();
    //   }
    //   redirect("/");
    // }
    // if (code === 404) {
    // }
  });
}
