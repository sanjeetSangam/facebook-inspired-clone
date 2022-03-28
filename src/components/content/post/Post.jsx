import { Avatar } from "@mui/material";
import "./post.css";

import { RiLiveFill } from "react-icons/ri";
import { IoImages } from "react-icons/io5";
import { BsEmojiLaughing } from "react-icons/bs";
import { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";

import firebase from "firebase/compat/app";

import db from "../../firebases/firebase";

export const Post = () => {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgURL,
    });

    setImgURL("");
    setInput("");
  };

  return (
    <div className="post">
      <div className="post_section">
        <Avatar src={user.photoURL} />

        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${
              user.displayName.split(" ")[0]
            }!`}
            className="post_input"
          />
          <input
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            className="post_img"
            placeholder="image url"
          />

          <button onClick={handleClick} type="submit">
            hidden button
          </button>
        </form>
      </div>

      <div className="dummy_options">
        <div className="dummy_option">
          <RiLiveFill style={{ color: "red", fontSize: "1.5rem" }} />
          <h3>Live Video</h3>
        </div>
        <div className="dummy_option">
          <IoImages style={{ color: "green", fontSize: "1.5rem" }} />
          <h3>Photo/video</h3>
        </div>
        <div className="dummy_option">
          <BsEmojiLaughing
            style={{ color: "darkorange", fontSize: "1.5rem" }}
          />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};
