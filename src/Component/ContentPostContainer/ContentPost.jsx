import React from "react";
import "./contentpost.css";
import profileimage from "../Images/Profile.png";
import imageIcon from "../Images/gallery.png";
import emojiIcon from "../Images/cat-face.png";
import VideoIcon from "../Images/video.png";
const ContentPost = () => {
  return (
    <div>
      <div className="ContentUploadContainer">
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={profileimage} className="profileImage" alt="" />
          <input
            type="text"
            className="contentWritingPart"
            placeholder="Write your real thought....."
          />
        </div>
        <div style={{display:"flex",marginLeft:"10px"}}>
          <div>
          <img src={imageIcon} alt="" className="icons" />
          <img src={emojiIcon} alt="" className="icons" />
          <img src={VideoIcon} alt="" className="icons" />
          <button style={{marginLeft:"350px",paddingLeft:"20px",paddingRight:"20px",paddingTop:6,paddingBottom:6,border:"none",backgroundColor:"black",color:"white",borderRadius:"5px",cursor:"pointer"}}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPost;
