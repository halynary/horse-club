import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import Logo from "../Logo/Logo";
import Navigation from "../SidebarMenu/SidebarMenu";
export function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <NavLink className="brand" to="/" aria-label="Стременно — на головну">
          <Logo />
        </NavLink>
        <Navigation />
      </aside>
    </>
  );
}
