import "./sidebar.css";

import { SidebarRow } from "./SidebarRow";

import { FaUserFriends } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";

import { useSelector } from "react-redux";

export const Sidebar = () => {
  let user = useSelector((store) => store.user.user);

  return (
    <div className="sidebar">
      <SidebarRow title={user.name.split(" ")[0]} src={user.profileUrl} />
      <SidebarRow title="Friends" Icon={FaUserFriends} />
      <SidebarRow title="Groups" Icon={HiUserGroup} />
      <SidebarRow title="Marketplace" Icon={FaMapMarkedAlt} />
      <SidebarRow title="Watch" Icon={MdOutlineOndemandVideo} />
      <SidebarRow title="Memories" Icon={IoMdTimer} />
      <SidebarRow title="Saved" Icon={MdSaveAlt} />
    </div>
  );
};
