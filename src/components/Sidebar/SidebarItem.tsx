interface SidebarItemProps {
    name: string;
    icon: React.ReactNode;
  }
  
  const SidebarItem = ({ name, icon }: SidebarItemProps) => (
    <div className="flex items-center gap-10 p-2 cursor-pointer">
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );
  
  export default SidebarItem;
  