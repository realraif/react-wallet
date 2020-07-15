import { BsPieChart, BsBriefcase } from 'react-icons/bs';
import { AiOutlineBarChart, AiOutlineCreditCard } from 'react-icons/ai';
import { IoIosTrendingUp } from 'react-icons/io';

import Dashboard from "./pages/Dashboard/Dashboard";

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
    component: Dashboard,
  },
  {
    path: "/app/ccards",
    title: "Credit Cards",
    icon: AiOutlineCreditCard,
    component: Dashboard,
  },
  {
    path: "/app/loans",
    title: "Loans",
    icon: BsBriefcase,
    component: Dashboard,
  },
  {
    path: "/app/trades",
    title: "Trades",
    icon: IoIosTrendingUp,
    component: Dashboard,
  },
];

export default routes;
