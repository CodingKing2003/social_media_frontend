import React from "react";
import "./profilerightbar.css";


import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addFriends from "../Images/add-user.png";

const ProfileRightbar = () => {
  return (
    <div className="ProfileRightBar">
      <div className="profileRightContainer">
        <h3>Friend request</h3>
        <div>
            <div>
            <div style={{display:"flex",alignItems:"center",marginLeft:10,cursor:"pointer"}}>
            <img src={image2} className="Friendsimage" alt="" />
            <p style={{textAlign:"start",marginLeft:"10px"}}>King wants to make you friend</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:5,paddingBottom:5,border:"none",backgroundColor:"black",color:"white",marginTop:5,borderRadius:"10px"}}>Accept</button>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:5,paddingBottom:5,border:"none",backgroundColor:"black",color:"white",marginTop:5,borderRadius:"10px"}}>Deny</button>
          </div>

            </div>
         

          
        </div>
        <div>
            <div>
            <div style={{display:"flex",alignItems:"center",marginLeft:10,cursor:"pointer",marginTop:10}}>
            <img src={image5} className="Friendsimage" alt="" />
            <p style={{textAlign:"start",marginLeft:"10px"}}>King wants to make you friend</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:5,paddingBottom:5,border:"none",backgroundColor:"black",color:"white",marginTop:5,borderRadius:"10px"}}>Accept</button>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:5,paddingBottom:5,border:"none",backgroundColor:"black",color:"white",marginTop:5,borderRadius:"10px"}}>Deny</button>
          </div>

            </div>
         

          
        </div>
        <div>
            <div>
            <div style={{display:"flex",alignItems:"center",marginLeft:10,cursor:"pointer",marginTop:10}}>
            <img src={image6} className="Friendsimage" alt="" />
            <p style={{textAlign:"start",marginLeft:"10px"}}>King wants to make you friend</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:5,paddingBottom:5,border:"none",backgroundColor:"black",color:"white",marginTop:5,borderRadius:"10px"}}>Accept</button>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:5,paddingBottom:5,border:"none",backgroundColor:"black",color:"white",marginTop:5,borderRadius:"10px"}}>Deny</button>
          </div>

            </div>
         

          
        </div>
      </div>

      <div className="rightContainer2">
        <h3 style={{ textAlign: "start", marginLeft: "10px" }}>
          Suggested for you
        </h3>
        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={image1} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>Rajan</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Suggested for you
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginLeft: "13px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img src={addFriends} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={image2} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>King</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Followed by Royal
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginLeft: "13px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img src={addFriends} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={image3} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>King</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Followed by Royal
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginLeft: "13px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img src={addFriends} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={image4} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>King</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Followed by Royal
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginLeft: "13px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img src={addFriends} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={image5} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>King</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Followed by Royal
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginLeft: "13px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img src={addFriends} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={image6} className="ProfileImage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>King</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Followed by Royal
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginLeft: "13px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <img src={addFriends} className="addFriend" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightbar;
