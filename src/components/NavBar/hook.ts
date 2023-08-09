import { NavItemsI } from "../../types/interfaces/routes.interface";

const navItems: NavItemsI[] = [
  {
    path: "/",
    text: "Store",
  },
  {
    path: "/",
    text: "Orders",
  },
  {
    path: "/",
    text: "Analytics",
  },
];

const useNavBar = () => {
  return { navItems };
};

export default useNavBar;
