import Dashboard from "../dashboard";
import MemberHome from "../../hc360/member360/pages/home";
import ProviderHome from "../../hc360/provider360/pages/home";
import Test from "../../hc360/provider360/pages/Test";
import Test1 from "../../hc360/provider360/pages/Test";
import Profile from "../login/profile"
const routesConfig = [
    
  {
    path: "/",
    component: Dashboard,
    exact: true
  },
  {
    path: "/member",
    component: MemberHome,
    exact: true
  },
  {
    path: "/member/test",
    component: Test,
    exact: true
  },
  {
    path: "/member/test/test1",
    component: Test1,
    exact: true
  },
  {
    path: "/provider",
    component: ProviderHome,
    exact: true
  },
  {
    path: "/profile",
    component: Profile,
    exact: true
  }
];

export default routesConfig;
