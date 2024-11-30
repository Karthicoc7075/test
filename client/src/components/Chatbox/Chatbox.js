import React, { useEffect, useRef, useState } from "react";
import "./Chatbox.css";
import searchIcon from "../../assets/icons/search.png";
import phoneIcon from "../../assets/icons/phone.png";
import menuIcon from "../../assets/icons/menu.png";
import docIcon from "../../assets/icons/paper-clip.png";
import micIcon from "../../assets/icons/mic (1).png";
// import searchIcon from '../../assets/icons/search.png'
import profileImg from "../../assets/images/profile-7.jpg";
import { useNavigate } from "react-router-dom";
import sendIcon  from '../../assets/icons/send.png'
   
function Chatbox({setShowProfileDetails,socket}) {
  const [chatMessage, setChatMessage] = useState([
    { id:1,message: "hi", recevied: false },
    { id:2,message: "hello", recevied: true },
    { id:3,message: "hi", recevied: false },
    { id:4,message: "hello", recevied: true },
    { id:5,message: "hi", recevied: false },
    { id:6,message: "hello", recevied: true },
    { id:7,message: "hi", recevied: false },
    { id:8,message: "hello", recevied: true },
  ])

  

  const [showMoreModel,setMoreModel] = useState(false)
  const [currentMessage, setCurrentMessage] = useState("");
  const navigate = useNavigate();



const [room,setRoom] = useState('') 


  const sendMessageHandle = (e) => {
    e.preventDefault()
    if(!currentMessage){
      console.log('no message');
      
      return
    }
    

    socket.emit('cj', currentMessage);
    
    socket.on('cj', (message) => {
   console.log(message);
   const chat = {
    id: chatMessage.length + 1,
    message,
    recevied: false,
  };
  setChatMessage(prev=>[...prev, chat]);

  
    
    })



  
    setCurrentMessage("");
//   socket.emit('send-msg',currentMessage,room)
//   Socket
  
//     console.log(currentMessage);
   
// setCurrentMessage("")
  };
//   const roomJoin=(e)=>{
//     e.preventDefault();
//             socket.emit('join-room',room)

//   }
//   socket.on('receive-msg',data=>{

//     setChatMessage([
//          ...chatMessage,
//          { message: data, recevied: false },
//        ]);
   
//        })
// console.log(socket);


  useEffect(() => {
    scroll.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [chatMessage]);

  const scroll = useRef();

  const modelHandle =()=>{
    setShowProfileDetails(true);
    setMoreModel(false);
  }
  return (
    <div className={"chatbox"}>
        <div className="chatbox-container" >
      <div className="chatbox-header">
        <div className="chatbox-info">
          <img src={profileImg} />
          <div className="chatbox-headerInfo">
            <h4 className="chatbox-headerInfo-name">George</h4>
            <p className="chatbox-headerInfo-status"><span className= "status online-status"></span>online</p>
          </div>
        </div>
        <div className="chatbox-header-options">
          <img className="icon" src={searchIcon} alt="searchIcon" />

          <img className="icon" src={phoneIcon} alt="phoneIcon" />
          <img className="icon" src={menuIcon} alt="menuIcon" onClick={()=>setMoreModel(!showMoreModel)} />
        </div>
      </div>
{/* <div className="test"> */}
  
<div className="chatbox-body" >

{chatMessage.map((chat) => {
  return (
    <div
      className={
        chat.recevied
          ? "chatbox-chat received"
          : "chatbox-chat sender"
      }
      ref={scroll}
key={chat.id}
>
      <div className="chatbox-message">{chat.message}</div>
      <p className="chat-message-timestamp">11.30 pm</p>
    </div>
  );
})}
</div>
{/* </div> */}
      <form className="chatbox-footer"  >
        <img className="icon" src={docIcon}   />
        <input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Message"
        />
<div className="icons">
<img className="icon" src={micIcon}  />
       <button className="send-btn" onClick={(e)=>sendMessageHandle(e)}> <img className="icon" src={sendIcon}   /></button>
</div>
      </form>
      {
        showMoreModel && <div className="moreInfo-model">
        <ul className="moreInfo">
              <li className="moreInfo-item" onClick={()=>modelHandle()}>Profile Info</li> 
              <li className="moreInfo-item" onClick={()=>navigate('/chat')}>Chat close</li>

        </ul>
    </div>
      }
    </div>
    </div>
  );
}

export default Chatbox;
