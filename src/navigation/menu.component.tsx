import { NavLink } from "react-router-dom";

type menuItem = {
  submenu: string | null;
  icon: string;
  label: string;
  routerLink: string;
  handleClick: () => void;
};
const Menu = ({ label, routerLink, icon, handleClick }: menuItem) => {
  return (
    <li className="cursor-pointer items-center text-center py-4 m-auto">
      <NavLink to={routerLink} onClick={() => handleClick()}>
        {label}
      </NavLink>
    </li>
  );
};

export default Menu;
