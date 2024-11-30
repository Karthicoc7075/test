import React, { useState } from "react";
import './RightSideChat.css';
import Chatdetails from "../Chatdetails/Chatdetails";
import Chatbox from "../Chatbox/Chatbox";

function RightSideChat({ socket }) {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  console.log('this right');

  return (
    <div
      className={
        !showProfileDetails
          ? "right-side-chat"
          : "right-side-chat profile-details-show"
      }
    >
      {window.innerWidth <= 1300 ? (
        showProfileDetails ? (
         
            <Chatdetails setShowProfileDetails={setShowProfileDetails} />
        ) : (
          <Chatbox setShowProfileDetails={setShowProfileDetails} socket={socket} />
        )
      ) : (
        <>
              <Chatbox setShowProfileDetails={setShowProfileDetails} socket={socket} />
           {showProfileDetails ? (
            <Chatdetails setShowProfileDetails={setShowProfileDetails} />
        ):null
        }
            </>
        )
          
      }
    </div>
  );
}

export default RightSideChat;
