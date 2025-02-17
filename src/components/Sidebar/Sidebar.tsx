import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside
      className={`bg-AzulSidebar text-white min-h-screen flex flex-col transition-all duration-300 shadow-lg ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-4 mb-10">
        <img
          src="/Logo.svg"
          alt="Logo"
          className={`transition-all duration-300 ${isCollapsed ? "hidden" : "block"}`}
        />
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white focus:outline-none"
        >
          {isCollapsed ? "▶" : "◀"}
        </button>
      </div>
      <SidebarNav isCollapsed={isCollapsed} />
      <SidebarFooter isCollapsed={isCollapsed} onLogout={handleLogout} />
    </aside>
  );
};

export default Sidebar;