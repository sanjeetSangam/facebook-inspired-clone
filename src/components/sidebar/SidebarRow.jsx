import { Avatar } from "@mui/material";

import "./sidebarRow.css";

export const SidebarRow = ({ title, src, Icon }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon className="sidebar_icons" />}

      <h4>{title}</h4>
    </div>
  );
};
