import React from "react-dom";
import Navbar from "./Navbar";
import './UserProfile.css';
import ProfileContent from "./ProfileContent";
import StickyFooter from "./StickyFooter";

export default function UserProfile() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <br/>
        <div className="profilebody">
          <ProfileContent/>
        </div>
        <StickyFooter />
      </div>
    </>
  );
}
