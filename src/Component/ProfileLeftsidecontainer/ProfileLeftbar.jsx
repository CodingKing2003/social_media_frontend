import React from "react";
import "./profileleftbar.css";
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";

const ProfileLeftBar = () => {
  return (
    <div className="ProfileLeftbar">
      <div className="NotificationsContainer">
      <img src={image} className="ProfilePageCover" alt="" />
       <div style={{display:"flex",alignItems:"center",marginTop:-30}}>
        <img src={image} className="ProfilePageImage" alt="" />
        <div>
        <p style={{marginLeft:6,marginTop:20,color:"black",textAlign:"start"}}>Rajan</p>
        <p style={{marginLeft:6,color:"black",textAlign:"start", marginTop:-16 , fontSize:11}}>Software Developer</p>
        </div>
       </div>
       <div style={{display:"flex",justifyContent:"space-between"}}>
        <p style={{marginLeft:6,marginTop:20,fontSize:"14px",color:"black"}}>Profile Views</p>
        <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>456780</p>
       </div>
      

       <div style={{display:"flex",justifyContent:"space-between",marginTop:-20}}>
        <p style={{marginLeft:6,marginTop:20,fontSize:"14px",color:"black"}}>Friends</p>
        <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>4560</p>
       </div>

    

       <div style={{marginTop:-20}}>
        <h5 style={{marginLeft:10,marginTop:20,fontSize:"14px",color:"black", marginRight:30,textAlign:'start'}}>User Bio</h5>
        <p style={{color:"black" ,  fontSize:"12px" , marginTop:-20,textAlign:"start", marginLeft:"10px"}}>I would rather be despised of who I am, rather than loved by who I am not.</p>
       </div>
       <button style={{width:"100%",paddingTop:7,paddingBottom:7,border:"none",backgroundColor:"green",color:"white"}}>Edit Bio</button>
      </div>

      <div className="NotificationsContainer">
        <h3>Your Friends</h3>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{marginLeft:10,}}>Friends</p>
            <p style={{marginRight:10,color:"#aaa"}}>See All</p>
            </div>
            
                <div style={{display:"flex",flexWrap:"wrap",marginLeft:5}}>
                    <div style={{marginLeft:4}}>
                        <img src={image1} alt="" className="friendImage" />
                        <p style={{marginTop:-2}}>King</p>
                    </div>
                    <div style={{marginLeft:4}}>
                        <img src={image2} alt="" className="friendImage" />
                        <p style={{marginTop:-2}}>King</p>
                    </div>

                    <div style={{marginLeft:4}}>
                        <img src={image3} alt="" className="friendImage" />
                        <p style={{marginTop:-2}}>King</p>
                    </div>

                    <div style={{marginLeft:4}}>
                        <img src={image4} alt="" className="friendImage" />
                        <p style={{marginTop:-2}}>King</p>
                    </div>

                    <div style={{marginLeft:4}}>
                        <img src={image5} alt="" className="friendImage" />
                        <p style={{marginTop:-2}}>King</p>
                    </div>

                    <div style={{marginLeft:4}}>
                        <img src={image6} alt="" className="friendImage" />
                        <p style={{marginTop:-2}}>King</p>
                    </div>
                </div>
          
        
       
      </div>
    </div>
  );
};

export default ProfileLeftBar;
