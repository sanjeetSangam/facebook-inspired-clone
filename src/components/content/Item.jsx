import { Avatar } from "@mui/material";

import "./item.css";

export const Item = ({ image, profilePic, title }) => {
  return (
    <div className="story_item" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profilePic} className="story_avatar" />
      <h4>{title}</h4>
    </div>
  );
};
