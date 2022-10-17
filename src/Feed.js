import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Adam Abdulkadir"
        username="adam_862"
        verified={true}
        text="I challenege you sir, to build a Twitter Clone with React JS"
        avatar="https://randomuser.me/api/portraits/men/80.jpg"
        image="https://media1.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif?cid=ecf05e473vtk3r3eu90tvy6w3ef19qc88tjqi8z79ypna0sp&rid=giphy.gif&ct=g"
      />
      <Post
        displayName="John Snow"
        username="johnshoe3"
        verified={true}
        text="Yo is this Twitter?"
        avatar="https://randomuser.me/api/portraits/men/57.jpg"
        image="https://media1.giphy.com/media/Q7k6o5AR1kXjDIYZhu/giphy.gif?cid=ecf05e47caw6rez2gc67qcqu9xa9wtcju0rity92l6qtx4my&rid=giphy.gif&ct=g"
      />
    </div>
  );
}

export default Feed;
