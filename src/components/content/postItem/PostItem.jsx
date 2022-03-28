import { Avatar } from "@mui/material";
import "./postItem.css";

import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";

export const PostItem = ({
  profilePic,
  image,
  username,
  timestamp,
  message,
}) => {
  return (
    <div className="post__item">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />

        <div className="post__info">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__buttons">
        <div className="post__buttons__option">
          <BiLike />
          <p>Like</p>
        </div>
        <div className="post__buttons__option">
          <GoComment />
          <p>Comment</p>
        </div>
        <div className="post__buttons__option">
          <RiShareForwardLine />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};
