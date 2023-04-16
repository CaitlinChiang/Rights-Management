import Home from 'layouts/home'
import Requests from "layouts/requests"
// import SignIn from "layouts/authentication/sign-in"
// import SignUp from "layouts/authentication/sign-up"
import Tribe from 'layouts/tribe'
import TribeMore from 'layouts/tribe/more'
import ResearchersApply from 'layouts/researchers'
import EditTribeInfo from 'layouts/researchers/editTribeInfo'
import ResearcherProfile from 'layouts/researchers/profile'

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Cube from "examples/Icons/Cube";

const routes = [
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Researcher",
    key: "researcher",
    route: "/researcher",
    icon: <CustomerSupport size="12px" />,
    component: <ResearcherProfile />,
    noCollapse: true,
  },
  { type: "title", title: "Navigation", key: "account-pages" },
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
    route: "/apply",
    icon: <Document size="12px" />,
    component: <ResearchersApply />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Information",
    key: "information",
    route: "/information",
    icon: <Cube size="12px" />,
    component: <EditTribeInfo />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Requests",
    key: "requests",
    route: "/requests",
    icon: <CustomerSupport size="12px" />,
    component: <Requests />,
    noCollapse: true,
  }
]

export default routes
