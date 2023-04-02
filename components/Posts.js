import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          key: doc.data().id,
          image: doc.data().image,
          message: doc.data().message,
          timeStamp: doc.data().timeStamp,
          postImage: doc.data().postImage
        }))
      )
    );
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          image={post.image}
          message={post.message}
          timeStamp={post.timeStamp}
          postImage={post.postImage}
        />
      ))}
    </div>
  );
}
 
export default Posts;
