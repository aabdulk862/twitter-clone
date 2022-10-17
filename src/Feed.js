import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./utils/firebase";
import { collection, getDocs } from "firebase/firestore";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return async () => {
      const twitterPosts = collection(db, "posts");
      const postsSnapshot = await getDocs(twitterPosts);
      setPosts(postsSnapshot.docs.map((doc) => doc.data()));
    };
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Twitter Clone - Github: aabdulk862</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
