import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
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
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="adam_862"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://github.com/aabdulk862"}
          options={{
            text: "Check out this twitter clone made with #React",
            via: "adam_862",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
