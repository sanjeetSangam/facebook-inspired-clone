import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import db from "../firebases/firebase";

import "./item.css";

export const Item = ({ image, profilePic, title, postID }) => {
  return (
    <div className="story_item" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profilePic} className="story_avatar" />
      <h4>{title}</h4>
    </div>
  );
};
