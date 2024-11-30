import React from 'react'
import './SideCard.css'
import profileImg from '../../assets/images/profile-1.jpg'
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
      id:"7286203",
      img: profileImg7,
      followers:"40",
      name: "George",

    },
    {
      id:"5331488",
      img: profileImg4,
      followers:"84",
      name: "Garrett",
    },
    {
      id:"4920058",
      img: profileImg5,
      followers:"49",
      name: "Wayne",
    },
    {
      id:"4116322",
      img: profileImg7,
      followers:"20",
      name: "Ronald",
    },
    {
      id:"7596435",
      img: profileImg10,
      followers:"58",
      name: "Hulda",
    },
    {
      id:"12307963",
      img: profileImg7,
      followers:"59",
      name: "Rose",
    },
    {
      id:"784982",
      img: profileImg5,
      followers:"11",
      name: "George",
    },
    {
      id:"2744900",
      img: profileImg10,
      followers:"39",
      name: "Roy",
    },
    {
      id:"7167891",
      img: profileImg2,
      followers:"75",
      name: "Isaac",
    },
    {
      id:"2399768",
      img: profileImg9,
      followers:"54",
      name: "Leroy",
    },
    {
      id:"5077929",
      img: profileImg9,
      followers:"67",
      name: "Owen",
    },
    {
      id:"6635250",
      img: profileImg9,
      followers:"58",
      name: "Cora",
    },
    {
      id:"488550",
      img: profileImg6,
      followers:"38",
      name: "Madge",
    },
    {
      id:"7283065",
      img: profileImg4,
      followers:"62",
      name: "Blake",
    },
    {
      id:"11640927",
      img: profileImg5,
      followers:"54",
      name: "Ola",
    },
    {
      id:"1453877",
      img: profileImg1,
      followers:"24",
      name: "Nettie",
    },
    {
      id:"4550495",
      img: profileImg8,
      followers:"85",
      name: "Nettie",
    },
    {
      id:"1475269",
      img: profileImg3,
      followers:"86",
      name: "Julian",
    },
    {
      id:"5410259",
      img: profileImg4,
      followers:"33",
      name: "Jeremy",
    },
    {
      id:"5305652",
      img: profileImg4,
      followers:"62",
      name: "Sally",
    },
    {
      id:"1170911",
      img: profileImg7,
      followers:"27",
      name: "Limga",
    },
    {
      id:"7413143",
      img: profileImg2,
      followers:"25",
      name: "Adele",
    },
    {
      id:"1574274",
      img: profileImg6,
      followers:"37",
      name: "Garrett",
    },
    {
      id:"10915746",
      img: profileImg7,
      followers:"3",
      name: "Limga",
    },
    {
      id:"10021545",
      img: profileImg2,
      followers:"36",
      name: "Adele",
    },
    {
      id:"8297297",
      img: profileImg6,
      followers:"74",
      name: "Garrett",
    },
  ];

function SideCard() {

    
  return (
    <div className='sideCard-wrapper'>
        <div className='sideCard'>
            <h2>Top Followers</h2>
        {
            datas.map((data)=>{
            return  <div className='top-user-list' key={data.id}> 
              <div className='user-item'>
                   <div className='user-details' >
                    <img className='img profile-img' src={data.img}/>
                   <div>
                <h3>{data.name}</h3>
                     <h5>{data.followers}K followers</h5>
                   </div>
                   </div>
                   <div className='btn-wrapper'>
                <a className='btn follow-btn' >following</a>
                   </div>
                </div>
               
             </div>
            })
        }
        </div>
    </div>
  )
}

export default SideCard