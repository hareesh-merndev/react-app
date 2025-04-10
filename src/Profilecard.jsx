import React, { useEffect, useRef } from "react";
import hareeshlogo from "./assets/hareesh.jpeg";
import linkedinlogo from "./assets/download.png";
import instalogo from "./assets/download.jfif";
import "./Profilecard.css";
import VanillaTilt from "vanilla-tilt";

const profilelist = {
  name: "Hareesh Ragavan",
  department: "AI&DS",
  Batch: "2023",
  mobile: "8682012275",
  address: "dharmapuri,pappireddipatti",
};

const Profilecard = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25, 
        speed: 400, 
        scale: 1.1, 
        glare: true, 
        "max-glare": 0.5, 
      });
    }

    
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={tiltRef} 
      className="profile-card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "330px",
        perspective: "1000px",
      }}
    >
      <div
        style={{
          position: "relative",
          border: "2px solid black",
          borderRadius: "8px",
          width: "600px",
          height: "330px",
          background: "linear-gradient(135deg,rgb(153, 131, 131),rgb(63, 60, 60),rgb(68, 73, 75))",
          boxShadow: "5px 4px 8px rgba(0, 0, 0, 0.1)",
          fontSize: "16px",
          fontWeight: "bold",
          color: "white",
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
            alt="Profile"
            style={{
              position: "absolute",
              top: "-55px",
              left: "450px",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <a
            href="https://www.linkedin.com/in/hareesh-ragavan-467b52329"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinlogo}
              alt="LinkedIn"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "500px",
                width: "40px",
                height: "40px",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/d_harish_d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instalogo}
              alt="Instagram"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "420px",
                width: "40px",
                height: "40px",
              }}
            />
          </a>
          <p>{profilelist.name}</p>
          <p>Department: {profilelist.department}</p>
          <p>Batch: {profilelist.Batch}</p>
          <p>Mobile: {profilelist.mobile}</p>
          <p>Address: {profilelist.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;