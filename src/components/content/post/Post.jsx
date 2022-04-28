import { Avatar, fabClasses } from "@mui/material";
import "./post.css";

import { RiLiveFill } from "react-icons/ri";
import { IoImages } from "react-icons/io5";
import { BsEmojiLaughing } from "react-icons/bs";

import { useState } from "react";

import firebase from "firebase/compat/app";

import db, { storage } from "../../firebases/firebase";

import { useSelector } from "react-redux";

export const Post = () => {
  // redux data
  let user = useSelector((store) => store.user.user);

  // file upload with caption
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  // progress bar of uploading value
  const [progress, setProgress] = useState(0);

  // toggle feature for progress of upload
  const [bar, setBar] = useState(false);

  // file selector function
  const onFileChange = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
      setBar(true);
    }
  };

  // uploading post funtion
  const handleClick = (e) => {
    e.preventDefault();

    if (image === null) {
      alert("Please select image");
      return;
    }

    const uploadWork = storage.ref(`images/${image.name}`).put(image);

    uploadWork.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setBar(false);
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post here is being executed...
            db.collection("posts").add({
              message: input,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              profilePic: user.profileUrl,
              username: user.name,
              image: url,
            });

            setProgress(0);
            setInput("");
            setImage(null);
            setBar(false);
          });
      }
    );
  };

  return (
    <div className="post">
      <div className="post_section">
        <Avatar src={user.profileUrl} />

        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${user.name.split(" ")[0]}!`}
            className="post_input"
          />

          <div className=" dummy_option imgUpload">
            <IoImages style={{ color: "green", fontSize: "1.5rem" }} />
            <h3> {bar ? image.name.slice(0, 5) : "Photo/video"} </h3>
            <input type="file" onChange={onFileChange} />
          </div>

          <button disabled={!image} onClick={handleClick} type="submit">
            Post
          </button>
        </form>
      </div>

      <div className="dummy_options">
        <div className="dummy_option">
          <RiLiveFill style={{ color: "red", fontSize: "1.5rem" }} />
          <h3>Live Video</h3>
        </div>
        <div className="dummy_option">
          <BsEmojiLaughing
            style={{ color: "darkorange", fontSize: "1.5rem" }}
          />
          <h3>Feeling/Activity</h3>
        </div>
      </div>

      <div className="loading_animation">
        <progress value={progress} max={100} className="progress" />
      </div>
    </div>
  );
};
