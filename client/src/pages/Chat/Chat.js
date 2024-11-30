import React, { useEffect, useState,useRef } from "react";
import "./Chat.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar  from "../../components/Sidebar/Sidebar";
import LeftSideChat from "../../components/LeftSideChat/LeftSideChat";
import RightSideChat from "../../components/RightSideChat/RightSideChat";
import { useParams } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import {io} from 'socket.io-client'

import useScreenWidth from "./useScreenWidth";



function Chat() {
  const [chatboxHide, setChatboxHide] = useState(true);
  const screenWidth = useScreenWidth()
  const {userId} = useParams()
  const socketRef = useRef();

  useEffect(() => {
    if (userId && screenWidth < 767  ) {
      setChatboxHide(false);
    } else {
      setChatboxHide(true);
    }


  },[userId]);

  const server = 'http://localhost:8888';
  const socket = io(server);
    useEffect(() => {
      socket.on('connect', () => {
          console.log('Connected to server', socket.id);
       
      });
    }, [userId]);
    socketRef.current = socket;

    console.log(socketRef.current);
    

  return (
    <div className="chat-page">
        <Navbar/>

      <div className="chat">
        <Sidebar  />
        {screenWidth < 767 ? (
          <div className="chat-wrapper">
            {chatboxHide ? <LeftSideChat /> : <RightSideChat socket={socket}/>}
          </div>
        ) : (
          <div className="chat-wrapper">
            <LeftSideChat />
            {userId ? <RightSideChat socket={socket}  /> : <Welcome />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
