import { IoSettingsSharp } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";

interface SidebarFooterProps {
  isCollapsed: boolean;
  onLogout: () => void;
}

const SidebarFooter = ({ isCollapsed, onLogout }: SidebarFooterProps) => {
  return (
    <div className="mt-auto">
      <button
        className="flex items-center text-white w-full text-left p-4 hover:bg-selectB transition-colors duration-200"
      >
        <IoSettingsSharp className="mr-4" />
        {!isCollapsed && <span>Configuración</span>}
      </button>

      <button
        onClick={onLogout}
        className="flex items-center text-red-600 w-full text-left p-4 hover:bg-red-700 hover:text-white transition-colors duration-200"
      >
        <FaPowerOff className="mr-4" />
        {!isCollapsed && <span>Cerrar sesión</span>}
      </button>
    </div>
  );
};

export default SidebarFooter;