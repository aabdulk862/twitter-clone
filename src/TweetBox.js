import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      displayName: "Chad",
      username: "rockstarlifestyle",
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://randomuser.me/api/portraits/men/93.jpg",
      timestamp: Timestamp.now(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://randomuser.me/api/portraits/men/93.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's Happening?"
            type="text"
          />
        </div>
        <input
          className="tweetBox__inputImage"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
