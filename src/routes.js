import Home from 'layouts/home'
import Tables from "layouts/tables"
import Profile from "layouts/profile"
import SignIn from "layouts/authentication/sign-in"
import SignUp from "layouts/authentication/sign-up"
import Tribe from 'layouts/tribe'
import TribeMore from 'layouts/tribe/more'
import ResearchersApply from 'layouts/researchers'

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <Cube size="12px" />,
    component: <Home />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "About",
    key: "about",
    route: "/tribe/about",
    icon: <Cube size="12px" />,
    component: <Tribe />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "More",
    key: "more",
    route: "/tribe/more",
    icon: <Cube size="12px" />,
    component: <TribeMore />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Apply",
    key: "apply",
    route: "/researchers/apply",
    icon: <Cube size="12px" />,
    component: <ResearchersApply />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  }
]

export default routes
