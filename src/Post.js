import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
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
              <span>
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenege you sir, to build a Twitter Clone with React JS</p>
          </div>
        </div>
        <img src="https://media1.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif?cid=ecf05e473vtk3r3eu90tvy6w3ef19qc88tjqi8z79ypna0sp&rid=giphy.gif&ct=g" alt="" />
      </div>
    </div>
  );
}

export default Post;
