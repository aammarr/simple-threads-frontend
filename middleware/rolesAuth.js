export default function ({ store, redirect, route }) {
  // If the user is practice move to doctors.
  const SUPERADMIN_ROUTES = [
    "/practice",
    "/practice/create",
    "/auditLogs",
    "/",
  ];
  console.log(route.fullPath);
  if (store?.$auth?.user?.account_type == "patient") {
    if (SUPERADMIN_ROUTES.includes(route.fullPath)) {
      store.commit("setPrefix", "patient");
      console.log(prefix);

      redirect("find-care");
    }
  }
}
