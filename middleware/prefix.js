export default function ({ store, $auth, redirect, route }) {
  if ($auth.user) {
    //console.log($auth.user.account_type, route.path)
    if ($auth.user.account_type === "patient") {
      store.commit("setPrefix", "patient");

      console.log("patient");
      if (route.path.includes("/login")) {
        redirect("/find-care");
      }
    }
  }

  // else if (route.path !== '/login') {
  //   redirect('/login');
  // }
}
