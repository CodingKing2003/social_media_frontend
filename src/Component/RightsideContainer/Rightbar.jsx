import React from "react";
import "./rightbar.css";

import ads from "../Images/ads.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addFriends from '../Images/add-user.png';

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="rightContainer">
        <div className="adsContainer">
          <img src={ads} className="adsimg" alt="" />
          <div>
            <p
              style={{ textAlign: "start", marginLeft: "10px", marginTop: -20 }}
            >
              Codemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-16px",
              }}
            >
              Buy Codemy Course
            </p>
          </div>
        </div>

        <div className="adsContainer">
          <img src={image1} className="adsimg" alt="" />
          <div>
            <p
              style={{ textAlign: "start", marginLeft: "10px", marginTop: -20 }}
            >
              Codemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-16px",
              }}
            >
              Buy Codemy Course
            </p>
          </div>
        </div>
      </div>

      <div className="rightContainer2">
        <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Suggested for you</h3>
        <div style={{marginTop:"-10px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center"}}>
            <img src={image1} className="ProfileImage" alt="" />
           <div>
           <p style={{marginLeft:"10px",textAlign:"start"}}>Rajan</p>
            <p style={{marginLeft:"10px",textAlign:"start",marginTop:"-16px",fontSize:"11px",color:"#aaa"}}>Suggested for you</p>
           </div>

            </div>
            
          
          <div style={{backgroundColor:"#aaa",padding:"10px",marginLeft:"13px",borderRadius:"50%",cursor:"pointer"}}>
            <img src={addFriends} className="addFriend" alt="" />
          </div>
        </div>
      </div>

      <div style={{marginTop:"-10px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center"}}>
            <img src={image2} className="ProfileImage" alt="" />
           <div>
           <p style={{marginLeft:"10px",textAlign:"start"}}>King</p>
            <p style={{marginLeft:"10px",textAlign:"start",marginTop:"-16px",fontSize:"11px",color:"#aaa"}}>Followed by Royal</p>
           </div>

            </div>
            
          
          <div style={{backgroundColor:"#aaa",padding:"10px",marginLeft:"13px",borderRadius:"50%",cursor:"pointer"}}>
            <img src={addFriends} className="addFriend" alt="" />
          </div>
        </div>
      </div>

      <div style={{marginTop:"-10px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center"}}>
            <img src={image3} className="ProfileImage" alt="" />
           <div>
           <p style={{marginLeft:"10px",textAlign:"start"}}>King</p>
            <p style={{marginLeft:"10px",textAlign:"start",marginTop:"-16px",fontSize:"11px",color:"#aaa"}}>Followed by Royal</p>
           </div>

            </div>
            
          
          <div style={{backgroundColor:"#aaa",padding:"10px",marginLeft:"13px",borderRadius:"50%",cursor:"pointer"}}>
            <img src={addFriends} className="addFriend" alt="" />
          </div>
        </div>
      </div>

      <div style={{marginTop:"-10px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center"}}>
            <img src={image4} className="ProfileImage" alt="" />
           <div>
           <p style={{marginLeft:"10px",textAlign:"start"}}>King</p>
            <p style={{marginLeft:"10px",textAlign:"start",marginTop:"-16px",fontSize:"11px",color:"#aaa"}}>Followed by Royal</p>
           </div>

            </div>
            
          
          <div style={{backgroundColor:"#aaa",padding:"10px",marginLeft:"13px",borderRadius:"50%",cursor:"pointer"}}>
            <img src={addFriends} className="addFriend" alt="" />
          </div>
        </div>
      </div>

      <div style={{marginTop:"-10px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center"}}>
            <img src={image5} className="ProfileImage" alt="" />
           <div>
           <p style={{marginLeft:"10px",textAlign:"start"}}>King</p>
            <p style={{marginLeft:"10px",textAlign:"start",marginTop:"-16px",fontSize:"11px",color:"#aaa"}}>Followed by Royal</p>
           </div>

            </div>
            
          
          <div style={{backgroundColor:"#aaa",padding:"10px",marginLeft:"13px",borderRadius:"50%",cursor:"pointer"}}>
            <img src={addFriends} className="addFriend" alt="" />
          </div>
        </div>
      </div>

     

      <div style={{marginTop:"-10px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center"}}>
            <img src={image6} className="ProfileImage" alt="" />
           <div>
           <p style={{marginLeft:"10px",textAlign:"start"}}>King</p>
            <p style={{marginLeft:"10px",textAlign:"start",marginTop:"-16px",fontSize:"11px",color:"#aaa"}}>Followed by Royal</p>
           </div>

            </div>
            
          
          <div style={{backgroundColor:"#aaa",padding:"10px",marginLeft:"13px",borderRadius:"50%",cursor:"pointer"}}>
            <img src={addFriends} className="addFriend" alt=""/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Rightbar;
