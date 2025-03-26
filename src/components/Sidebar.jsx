import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#fefae0] text-white min-h-screen p-5">
      <h2 className="text-2xl text-[#d4a373] font-bold mb-6">Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `font-semibold block px-4 py-2 rounded-lg transition ${
                  isActive ? "bg-[#d4a373]" : "bg-white text-[#d4a373]"
                }`
              }
            >
              Details
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
