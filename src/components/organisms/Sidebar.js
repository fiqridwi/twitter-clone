import Menu from "../molecules/Menu";
import SidebarIcon from "../atoms/SidebarIcon";
import MenuButton from "../atoms/MenuButton";
import MenuAccount from "../molecules/MenuAccount";

export default function Sidebar() {
  return (
    <div className="flex flex-col relative ">
      <SidebarIcon />
      <Menu />
      <MenuButton />
      <MenuAccount />
    </div>
  );
}
