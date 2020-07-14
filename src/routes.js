import Dashboard from "./pages/Dashboard/Dashboard";

const routes = [
  {
    path: "/app/dashboard",
    title: "Overview",
    icon: "pe-7s-graph",
    component: Dashboard,
  },
  {
    path: "/app/balances",
    title: "Balances",
    icon: "pe-7s-graph",
    component: Dashboard,
  },
  {
    path: "/app/ccards",
    title: "Credit Cards",
    icon: "pe-7s-graph",
    component: Dashboard,
  },
  {
    path: "/app/loans",
    title: "Loans",
    icon: "pe-7s-graph",
    component: Dashboard,
  },
  {
    path: "/app/trades",
    title: "Trades",
    icon: "pe-7s-graph",
    component: Dashboard,
  },
];

export default routes;
