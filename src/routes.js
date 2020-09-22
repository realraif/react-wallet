import { BsPieChart, BsBriefcase } from "react-icons/bs";
import { AiOutlineBarChart, AiOutlineCreditCard } from "react-icons/ai";

import Dashboard from "./pages/Dashboard/Dashboard";
import Balances from "./pages/BalancesScreen/BalancesScreen";
import CreditCards from './pages/CreditCardsScreen/CreditCardsScreen';

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
    path: "/app/loans",
    title: "Loans",
    icon: BsBriefcase,
    component: Dashboard,
  },
];

export default routes;
