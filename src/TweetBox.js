import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://randomuser.me/api/portraits/men/73.jpg" />
          <input placeholder="What's Happening?" type="text" />
        </div>
        <input className="tweetBox__inputImage" placeholder="Optional: Enter image URL" type="text" />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
