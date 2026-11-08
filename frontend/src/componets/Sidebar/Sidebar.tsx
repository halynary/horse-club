import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
export function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <NavLink className="brand" to="/" aria-label="Стременно — на головну">
          <Logo />
        </NavLink>
        <div className="nav-label">ВАШ КІННИЙ КЛУБ</div>
      </aside>
    </>
  );
}
