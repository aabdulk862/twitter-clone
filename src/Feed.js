import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./utils/firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return async () => {
      const twitterPosts = collection(db, "posts");
      const q = query(twitterPosts, orderBy("timestamp","desc"));
      const postsSnapshot = await getDocs(q);
      setPosts(postsSnapshot.docs.map((doc) => doc.data()));
    };
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>This is not the real twitter.</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.timestamp}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            timestamp={post.timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
