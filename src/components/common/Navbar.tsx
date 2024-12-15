import { NavLink } from "react-router-dom";
import { MAIN_LINKS, USER_LINKS } from "../../constants/Links";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center p-6">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl text-genoa-500 font-bold capitalize">Shopi</h1>
        <div className="flex gap-4">
          {MAIN_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "8px" : "0px",
              })}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-black-500 text-sm">camiloplaza3@gmail.com</p>
        <div className="flex gap-4">
          {USER_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "8px" : "0px",
              })}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
        <div>
          <p>🛒 0</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
