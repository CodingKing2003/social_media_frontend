import React from "react";
import "./leftbar.css";
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";

const Leftbar = () => {
  return (
    <div className="Leftbar">
      <div className="NotificationsContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-14px" }}>Notifications</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See All</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={image} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            King Bhai liked your post
          </p>
          <img src={image1} className="likeImage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={image} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            King started following you
          </p>
          <img src={image2} className="followingUserImage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={image} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            King started following you
          </p>
          <img src={image3} className="followingUserImage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={image} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            King Bhai liked your post
          </p>
          <img src={image4} className="likeImage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={image} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            King started following you
          </p>
          <img src={image5} className="followingUserImage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={image} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            King Bhai liked your post
          </p>
          <img src={image6} className="likeImage" alt="" />
        </div>
        
      </div>

      <div className="NotificationsContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-20px" }}>Explore</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See All</p>
        </div>
        <div>
          <img src={image1} className="exploreimage" alt="" />
          <img src={image2} className="exploreimage" alt="" />
          <img src={image3} className="exploreimage" alt="" />
          <img src={image4} className="exploreimage" alt="" />
          <img src={image5} className="exploreimage" alt="" />
          <img src={image6} className="exploreimage" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
