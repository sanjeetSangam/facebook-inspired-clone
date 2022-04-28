import { Avatar } from "@mui/material";
import "./postItem.css";

import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import db from "../../firebases/firebase";
import firebase from "firebase/compat/app";

export const PostItem = ({
  profilePic,
  image,
  username,
  timestamp,
  message,
  postID,
  user,
}) => {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    let unsubscribe;

    if (postID) {
      unsubscribe = db
        .collection("posts")
        .doc(postID)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    if (postID) {
      unsubscribe = db
        .collection("posts")
        .doc(postID)
        .collection("likes")
        .onSnapshot((snapshot) => {
          setLikes(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postID]);

  let postComment = (e) => {
    e.preventDefault();

    db.collection("posts").doc(postID).collection("comments").add({
      text: comment,
      username: user.name,
      userImg: user.profileUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setComment("");
  };

  let giveLikes = () => {
    let makeLike = false;

    likes.forEach((like) => {
      if (like.liked_user === user.email) {
        makeLike = true;
        return;
      }
    });

    if (makeLike) {
      alert("Already Liked");
      return;
    }

    db.collection("posts").doc(postID).collection("likes").add({
      liked_user: user.email,
    });
  };

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
        <div className="post__buttons__option" onClick={giveLikes}>
          <BiLike />
          <p>
            {" "}
            <strong>{likes.length}</strong> Like
          </p>
        </div>

        <div className="post__buttons__option">
          <GoComment />
          <p>
            {" "}
            <strong>{comments.length}</strong> Comments
          </p>
        </div>
        <div className="post__buttons__option">
          <RiShareForwardLine />
          <p>Share</p>
        </div>
      </div>

      <div className="commets__sections">
        <div className="addComments">
          <form action="">
            <Avatar src={user.profileUrl} />

            <input
              type="text"
              placeholder="Put your comment.."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button disabled={!comment} type="submit" onClick={postComment}>
              Comment
            </button>
          </form>
        </div>

        <div className="show__comments">
          <strong> {comments.length <= 0 ? "No Comment" : "Comments"} </strong>
          {comments.slice(0, 2).map((comnt) => {
            return (
              <div className="commets_list" key={comnt.timestamp}>
                <Avatar sx={{ width: 30, height: 30 }} src={comnt.userImg} />

                <p>
                  <strong>{comnt.username.split(" ")[0]}</strong>
                  {comnt.text}
                </p>
              </div>
            );
          })}

          {comments.length > 2 && (
            <button
              onClick={() => {
                setShowComments(true);
              }}
              className="show__more"
            >
              Show More..
            </button>
          )}
        </div>
      </div>

      <div className={showComments ? "all__comments showing" : "all__comments"}>
        <div className="comments__head">
          <strong>Comments</strong>

          <button onClick={() => setShowComments(false)}>&#10060;</button>
        </div>

        {comments.map((comnt) => {
          return (
            <div className="commets_list" key={comnt.timestamp}>
              <Avatar sx={{ width: 30, height: 30 }} src={comnt.userImg} />

              <p>
                <strong>{comnt.username.split(" ")[0]}</strong>
                {comnt.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className={showComments ? "overlap active" : "overlap"}></div>
    </div>
  );
};
