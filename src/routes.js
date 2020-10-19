import { BsPieChart, BsBriefcase } from "react-icons/bs";
import { AiOutlineBarChart, AiOutlineCreditCard } from "react-icons/ai";

import Dashboard from "./pages/Dashboard";
import Balances from "./pages/BalancesScreen";
import CreditCards from "./pages/CreditCardsScreen";
import BudgetScreen from "./pages/BudgetScreen";

export const defaultRoute = "dashboard";

const routes = [
  {
    path: "/app/dashboard",
    title: "Overview",
    icon: BsPieChart,
    component: Dashboard,
  },
  {
    path: "/app/balances",
    title: "Balances",
    icon: AiOutlineBarChart,
    component: Balances,
  },
  {
    path: "/app/ccards",
    title: "Credit Cards",
    icon: AiOutlineCreditCard,
    component: CreditCards,
  },
  {
    path: "/app/budget",
    title: "Budget",
    icon: BsBriefcase,
    component: BudgetScreen,
  },
];

export default routes;
