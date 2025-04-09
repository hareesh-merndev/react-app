import React from "react";
import hareeshlogo from "./assets/hareesh.jpeg";
import linkedinlogo from "./assets/download.png";
import instalogo from "./assets/download.jfif";
const profilelist={
    name:"Hareesh",
    department:"AI&DS",
    year:"2",
    mobile:"8682012275",
    address:"dharmapuri,pappireddipatti",
}
const Profilecard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
       <div
        style={{
          position: "relative",
          border: "2px solid #ccc",
          borderRadius: "8px",
          width: "300px",
          height: "350px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fcfbb4",
          paddingRight: "300px",
          marginLeft: "300px",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px", 
            textAlign: "left",
          }}
        >
             <img
            src={hareeshlogo}
            alt="Profille"
            style={{
                position: "absolute",
                bottom: "200px",
                left: "480px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                
            }}></img>
            <a
            href="https://www.linkedin.com/in/hareesh-ragavan-467b52329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
            src={linkedinlogo}
            alt="LinkedIn"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "430px",
              width: "40px",
              height: "40px",
            }}
          />
          </a>
          <a
            href="https://www.instagram.com/d_harish_d?igsh=czMyYjl3d21tdjlz"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img
            src={instalogo}
            alt="Instagram"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "500px",
              width: "40px",
              height: "40px",
            }}
          />
          </a>
        <p>{profilelist.name}</p>
        <p>Department: {profilelist.department}</p>
        <p>Year: {profilelist.year}</p>
        <p>Mobile: {profilelist.mobile}</p>
        <p>Address: {profilelist.address}</p>
      </div>
    </div>
    </div>
  );
}
export default Profilecard;