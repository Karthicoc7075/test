import React from 'react'
import './LeftSideChat.css'
import Conversation from "../Conversation/Conversation"
import searchIcon from "../../assets/icons/search.png";
import profileImg1 from "../../assets/images/profile-1.jpg";
import profileImg2 from "../../assets/images/profile-2.jpg";
import profileImg3 from "../../assets/images/profile-3.jpg";
import profileImg4 from "../../assets/images/profile-4.jpg";
import profileImg5 from "../../assets/images/profile-5.jpg";
import profileImg6 from "../../assets/images/profile-6.jpg";
import profileImg7 from "../../assets/images/profile-7.jpg";
import profileImg8 from "../../assets/images/profile-8.jpg";
import profileImg9 from "../../assets/images/profile-9.jpg";
import profileImg10 from "../../assets/images/profile-10.jpg";

const datas = [
  {
    id:"18133",
    img: profileImg7,
    name: "George",
  },
  {
    id:"51579",
    img: profileImg4,
    name: "Garrett",
  },
  {
    id:"79153",
    img: profileImg5,
    name: "Wayne",
  },
  {
    id:"59452",
    img: profileImg7,
    name: "Ronald",
  },
  {
    id:"22340",
    img: profileImg10,
    name: "Hulda",
  },
  {
    id:"40976",
    img: profileImg7,
    name: "Rose",
  },
  {
    id:"18456",
    img: profileImg5,
    name: "George",
  },
  {
    id:"83390",
    img: profileImg10,
    name: "Roy",
  },
  {
    id:"18276",
    img: profileImg2,
    name: "Isaac",
  },
  {
    id:"83339",
    img: profileImg9,
    name: "Leroy",
  },
  {
    id:"62698",
    img: profileImg9,
    name: "Owen",
  },
  {
    id:"22383",
    img: profileImg9,
    name: "Cora",
  },
  {
    id:"81477",
    img: profileImg6,
    name: "Madge",
  },
  {
    id:"99878",
    img: profileImg4,
    name: "Blake",
  },
  {
    id:"62253",
    img: profileImg5,
    name: "Ola",
  },
  {
    id:"60022",
    img: profileImg1,
    name: "Nettie",
  },
  {
    id:"75861",
    img: profileImg8,
    name: "Nettie",
  },
  {
    id:"20911",
    img: profileImg3,
    name: "Julian",
  },
  {
    id:"57915",
    img: profileImg4,
    name: "Jeremy",
  },
  {
    id:"86706",
    img: profileImg4,
    name: "Sally",
  },
  {
    id:"72032",
    img: profileImg7,
    name: "Limga",
  },
  {
    id:"13243",
    img: profileImg2,
    name: "Adele",
  },
  {
    id:"46639",
    img: profileImg6,
    name: "Garrett",
  },
  {
    id:"15276",
    img: profileImg7,
    name: "Limga",
  },
  {
    id:"57279",
    img: profileImg2,
    name: "Adele",
  },
  {
    id:"38247",
    img: profileImg6,
    name: "Garrett",
  },
];


function LeftSideChat() {

  return (
    <div className="left-side-chat">
   {/* <div className="left-side-chat-wrapper"> */}
   <div className="chat-search">
      <img className="searchIcon" src={searchIcon} alt='search-icon' />
      <input className="chat-search-input" placeholder="Search" />
    </div>
    <div className="chat-header-title">
      <h3 className="chat-title">Chats</h3>
    </div>
    <div className="chat-list"  >
      {datas.map((data) => {
        return (
          <Conversation key={data.id} {...data} />) } )}
            </div>
    {/* </div>    */}
</div>
  )
}

export default LeftSideChat