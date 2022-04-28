import "./content.css";
import { Post } from "./post/Post";
import { PostItem } from "./postItem/PostItem";
import { Story } from "./Story";

import db from "../firebases/firebase";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Content = () => {
  const [posts, setPosts] = useState([]);

  let user = useSelector((store) => store.user.user);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="content">
      <Story />
      <Post />

      {posts.map((post) => (
        <PostItem
          key={post.id}
          postID={post.id}
          user={user}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};
