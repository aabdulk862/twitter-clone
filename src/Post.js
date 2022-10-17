import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://randomuser.me/api/portraits/men/80.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Adam Abdulkadir{" "}
              <span className="post__headerSpecial">
                {<VerifiedUserIcon className="post__badge" />} @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenege you sir, to build a Twitter Clone with React JS</p>
          </div>
        </div>
        <img
          src="https://media1.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif?cid=ecf05e473vtk3r3eu90tvy6w3ef19qc88tjqi8z79ypna0sp&rid=giphy.gif&ct=g"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
