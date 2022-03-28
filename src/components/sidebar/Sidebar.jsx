import "./sidebar.css";

import { SidebarRow } from "./SidebarRow";

import { FaUserFriends } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";

import { useStateValue } from "../../context/StateProvider";

export const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName.split(" ")[0]} src={user.photoURL} />
      <SidebarRow title="Friends" Icon={FaUserFriends} />
      <SidebarRow title="Groups" Icon={HiUserGroup} />
      <SidebarRow title="Marketplace" Icon={FaMapMarkedAlt} />
      <SidebarRow title="Watch" Icon={MdOutlineOndemandVideo} />
      <SidebarRow title="Memories" Icon={IoMdTimer} />
      <SidebarRow title="Saved" Icon={MdSaveAlt} />
    </div>
  );
};
