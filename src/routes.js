import TribeCards from './layouts/communities/cards'
import CreateCommunity from './layouts/communities/create'
import UpdateCommunityInformation from './layouts/communities/update'
import CommunityMoreInformation from './layouts/communities/moreInformation'
import CommunityLockedInformation from './layouts/communities/lockedInformation'
import ResearcherProfile from './layouts/researchers/profile'
import CreateResearcher from './layouts/researchers/create'
import RequestsTable from "./layouts/requests"
import ResearchersTable from './layouts/researchers/applicants'
import NFTCards from './layouts/marketplace/cards'
import PurchaseNFT from './layouts/marketplace/purchase'
import CreateNFT from './layouts/marketplace/create'
import Office from "./components/Icons/Office"
import Settings from "./components/Icons/Settings"
import Document from "./components/Icons/Document"
import CustomerSupport from "./components/Icons/CustomerSupport"
import Cube from "./components/Icons/Cube"
import Shop from './components/Icons/Shop'

const user = {
  permission: 'LOCAL_MEMBER', // PUBLIC_USER, LOCAL_MEMBER, RESEARCHER, ADMIN
}

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <Office size="12px" />,
    component: <TribeCards />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'RESEARCHER', 'PUBLIC_USER', 'ADMIN']
  },
  {
    type: "collapse",
    name: "Researcher",
    key: "researcher",
    route: "/researcher",
    icon: <Settings size="12px" />,
    component: <ResearcherProfile />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'RESEARCHER']
  },
  {
    type: "collapse",
    name: "Community",
    key: "community",
    route: "/community",
    icon: <Document size="12px" />,
    component: <CreateCommunity />,
    noCollapse: true,
    permission: ['ADMIN']
  },
  {
    type: "collapse",
    name: "Apply",
    key: "apply",
    route: "/apply",
    icon: <Document size="12px" />,
    component: <CreateResearcher />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'PUBLIC_USER']
  },
  {
    type: "collapse",
    name: "Information",
    key: "information",
    route: "/information",
    icon: <Cube size="12px" />,
    component: <UpdateCommunityInformation />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'RESEARCHER']
  },
  {
    type: "collapse",
    name: "Requests",
    key: "requests",
    route: "/requests",
    icon: <CustomerSupport size="12px" />,
    component: <RequestsTable />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'RESEARCHER']
  },
  {
    type: "collapse",
    name: "Researchers",
    key: "researchers",
    route: "/researchers",
    icon: <CustomerSupport size="12px" />,
    component: <ResearchersTable />,
    noCollapse: true,
    permission: ['ADMIN']
  },
  ,
  {
    type: "collapse",
    name: "Marketplace",
    key: "marketplace",
    route: "/marketplace",
    icon: <Shop size="12px" />,
    component: <NFTCards />,
    noCollapse: true,
    permission: ['ADMIN', 'LOCAL_MEMBER', 'RESEARCHER', 'PUBLIC_USER']
  },
  {
    type: "collapse",
    name: "NFT",
    key: "NFT",
    route: "/NFT",
    icon: <Cube size="12px" />,
    component: <CreateNFT />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'RESEARCHER']
  },
  {
    type: "collapse",
    // name: "Purchase",
    // key: "purchase",
    route: "/marketplace/item",
    // icon: <Shop size="12px" />,
    component: <PurchaseNFT />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'RESEARCHER', 'PUBLIC_USER', 'ADMIN'],
    sidebarVisible: false
  },
  {
    type: "collapse",
    // name: "Know More 1",
    // key: "knowMore1",
    route: "/communities/about",
    // icon: <Office size="12px" />,
    component: <CommunityMoreInformation />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'RESEARCHER', 'PUBLIC_USER', 'ADMIN'],
    sidebarVisible: false
  },
  {
    type: "collapse",
    // name: "Know More 2",
    // key: "knowMore2",
    route: "/communities/lockedInformation",
    // icon: <Office size="12px" />,
    component: <CommunityLockedInformation />,
    noCollapse: true,
    permission: ['LOCAL_MEMBER', 'RESEARCHER', 'PUBLIC_USER', 'ADMIN'],
    sidebarVisible: false
  }
]
.filter(obj => {
  return Array.isArray(obj.permission) && obj.permission.includes(user?.permission)
})

export default routes
