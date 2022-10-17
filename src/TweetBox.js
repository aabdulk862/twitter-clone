import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./utils/firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      displayName: "GolD Roger",
      username: "pirateking",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://external-preview.redd.it/JPc7MqfKHZGPPq9R6yaqndbdiqXWyzNuxxmVdNDOtEs.jpg?auto=webp&s=1ffa1e35617c16ef46fcb2735fa2f6a6aada569c",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://external-preview.redd.it/JPc7MqfKHZGPPq9R6yaqndbdiqXWyzNuxxmVdNDOtEs.jpg?auto=webp&s=1ffa1e35617c16ef46fcb2735fa2f6a6aada569c" />
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
