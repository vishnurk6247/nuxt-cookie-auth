export default ({ store, route, redirect, $auth }) => {
  if (!store.state.isAuthenticated) {
    redirect("/");
  }
};
