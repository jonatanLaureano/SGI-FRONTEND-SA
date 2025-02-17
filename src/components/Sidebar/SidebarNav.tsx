import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSignal, FaClipboardList, FaBriefcase } from "react-icons/fa";
import { IoStorefrontOutline, IoAccessibility } from "react-icons/io5";
import { MdOutlineInventory, MdCategory } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbCategoryFilled } from "react-icons/tb";
import { FiLayers } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import SidebarItem from "./SidebarItem";

interface SidebarNavProps {
  isCollapsed: boolean;
}

const SidebarNav = ({ isCollapsed }: SidebarNavProps) => {
  const location = useLocation();
  const [isCategorizacionOpen, setIsCategorizacionOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaSignal size={20} />, path: "/dashboard" },
    { name: "Locales", icon: <IoStorefrontOutline size={20} />, path: "/locales" },
    { name: "Inventario", icon: <MdOutlineInventory size={20} />, path: "/inventario" },
    { name: "Ventas", icon: <RiMoneyDollarCircleLine size={22} />, path: "/ventas" },
    {
      name: "Categorización",
      icon: <FaClipboardList size={20} />,
      subItems: [
        { name: "Categoría", icon: <TbCategoryFilled size={20} />, path: "/categorizacion/categoria" },
        { name: "Subcategoría", icon: <MdCategory size={20} />, path: "/categorizacion/subcategoria" },
        { name: "Tipos", icon: <FiLayers size={20} />, path: "/categorizacion/tipos" },
      ],
    },
    { name: "Empleados", icon: <FaBriefcase size={20} />, path: "/empleados" },
    { name: "Clientes", icon: <IoAccessibility size={20} />, path: "/clientes" },
  ];

  useEffect(() => {
    if (menuItems[4] && menuItems[4].subItems) {
      const isCategorizacionPath = menuItems[4].subItems.some(subItem =>
        location.pathname.includes(subItem.path)
      );
      setIsCategorizacionOpen(isCategorizacionPath);
    }
  }, [location.pathname]);

  const handleCategorizacionClick = () => {
    setIsCategorizacionOpen(!isCategorizacionOpen);
  };

  return (
    <nav className="flex-1">
      {menuItems.map((item) => (
        <div key={item.name}>
          {item.subItems ? (
            <div
              className={`flex items-center gap-4 p-4 cursor-pointer transition-colors duration-200 hover:bg-selectB ${
                isCategorizacionOpen ? "bg-selectB" : ""
              }`}
              onClick={handleCategorizacionClick}
            >
              <span>{item.icon}</span>
              {!isCollapsed && <span className="truncate">{item.name}</span>}
              <GoChevronDown
                className={`ml-auto transition-transform ${
                  isCategorizacionOpen ? "transform" : ""
                }`}
              />
            </div>
          ) : (
            <Link
              to={item.path}
              className={`flex items-center gap-4 p-4 cursor-pointer transition-colors duration-200 hover:bg-selectB ${
                location.pathname === item.path ? "bg-selectB" : ""
              }`}
            >
              <span>{item.icon}</span>
              {!isCollapsed && <span className="truncate">{item.name}</span>}
            </Link>
          )}

          {item.subItems && isCategorizacionOpen && (
            <div>
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.name}
                  to={subItem.path}
                  className={`flex items-center gap-4 p-2 cursor-pointer transition-colors duration-200 hover:bg-selectB2 ${
                    location.pathname === subItem.path ? "bg-selectB2" : ""
                  }`}
                >
                  <SidebarItem name={subItem.name} icon={subItem.icon} />
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default SidebarNav;