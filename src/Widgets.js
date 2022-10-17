import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton} from 'react-twitter-embed';
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetsContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1582022751887314944"} />
      </div>
    </div>
  );
}

export default Widgets;
