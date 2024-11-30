import React, { useEffect, useState } from 'react'
import './Profile.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import profileImg from '../../assets/images/profile-10.jpg'

import gridIcon from '../../assets/icons/grid.png'
import likeIcon from '../../assets/icons/likeIcon.png'
import infoIcon from '../../assets/icons/info.png'
import commentIcon from '../../assets/icons/comment_white.png'
import calenderIcon from '../../assets/icons/calendar.png'
import locationIcon from '../../assets/icons/location.png'
import Model from '../../components/Model/Model'
import {useParams} from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
// import { getUserProfile } from '../../features/'
import { useDispatch, useSelector } from 'react-redux'



function Profile() {
  const [showModel,setShowModel]=useState(false);
  const {userId} = useParams()
   const dispatch = useDispatch()
  //  const user = useSelector(state=>state.user?.getUserProfile)
// console.log(user); 
   const modelShowHandle =()=>{
  setShowModel(true)
}


useEffect(()=>{
// dispatch(getUserProfile(userId));
},[])

  return (
    <div className='profile' >
      <Navbar/>
     {!false ?
      <div className='profile-wrapper'>
      <div className='sidebar-fixed'>
        <Sidebar />
        </div>  
        <div className='profile-card'>
<div className='profile-card-container'>
          <div className='profile-header'>
            <div className='profile-content'>
            <div className='profile-info-icon' onClick={modelShowHandle}>
                <img className='icon info-icon' src={infoIcon} alt='profile-img' />
              </div>
              <div className='profile-image' >
                <img src={profileImg} alt='profile-img' />
              </div>
              <div className='profile-info'>
                <h4 className='name'>Karthi</h4>
                <h5 className='bio'>Team Manager</h5>
                <p className='company'>Exacode Systems company</p>
                <p className='account-years'>Member for 2 Years</p>
                <a className='website' href='https://karthicoc7075.github.io/frontend/' >karthicoc7075.github.io/frontend</a>
              </div>
              <div className='profile-posts-followers-following'>
              <div className='profile-followers'>
                  <h4 >143</h4>
                  <p>Posts</p>
                </div>
                <div className='profile-followers'>
                  <h4 >10.3K</h4>
                  <p>followers</p>
                </div>
                <div className='profile-following'>
                  <h4 >7.3K</h4>
                  <p>following</p>
                </div>
              </div>
             {userId ?
              <div className='buttons'>
              <button className='btn following-btn'>Following</button>
              <a href='/chat/id' className='btn message-btn'>Message</a>
            </div>:null}
              <span className='underline'></span>
            </div>
          </div>
          <div className='profile-posts'>
            <h4 ><img className='postIcon' src={gridIcon} />Posts</h4>
            
           <div className='post-list'>
              <div className='post-item'>
               <div className='post-image-wrapper' >
               <img src={'https://chatsapp.blob.core.windows.net/temp/photo-1.jpg'} alt='post-img' />
               </div>
               <div className='post-info' >
                   <div className='post-like-info'>
                      <img className='likeIcon' src={likeIcon} alt='likeIcon'/>
                      18.1k
                   </div>
                   <div className='post-comment-info'>
                      <img className='commentIcon' src={commentIcon} alt='commentIcon'/>
                      364
                   </div>
               </div>
              </div>
              <div className='post-item'>
               <div className='post-image-wrapper' >
               <img src={"https://chatsapp.blob.core.windows.net/temp/photo-2.jpg"} alt='post-img' />
               </div>
               <div className='post-info' >
                   <div className='post-like-info'>
                      <img className='likeIcon' src={likeIcon} alt='likeIcon'/>
                      18.1k
                   </div>
                   <div className='post-comment-info'>
                      <img className='commentIcon' src={commentIcon} alt='commentIcon'/>
                      364
                   </div>
               </div>
              </div>
              <div className='post-item'>
               <div className='post-image-wrapper' >
               <img src={'https://chatsapp.blob.core.windows.net/temp/photo-3.jpg'} alt='post-img' />
               </div>
               <div className='post-info' >
                   <div className='post-like-info'>
                      <img className='likeIcon' src={likeIcon} alt='likeIcon'/>
                      18.1k
                   </div>
                   <div className='post-comment-info'>
                      <img className='commentIcon' src={commentIcon} alt='commentIcon'/>
                      364
                   </div>
               </div>
              </div>
              <div className='post-item'>
               <div className='post-image-wrapper' >
               <img src={'https://chatsapp.blob.core.windows.net/temp/photo-4.jpg'} alt='post-img' />
               </div>
               <div className='post-info' >
                   <div className='post-like-info'>
                      <img className='likeIcon' src={likeIcon} alt='likeIcon'/>
                      18.1k
                   </div>
                   <div className='post-comment-info'>
                      <img className='commentIcon' src={commentIcon} alt='commentIcon'/>
                      364
                   </div>
               </div>
              </div>
              <div className='post-item'>
               <div className='post-image-wrapper' >
               <img src={'https://chatsapp.blob.core.windows.net/temp/photo-5.jpg'} alt='post-img' />
               </div>
               <div className='post-info' >
                   <div className='post-like-info'>
                      <img className='likeIcon' src={likeIcon} alt='likeIcon'/>
                      18.1k
                   </div>
                   <div className='post-comment-info'>
                      <img className='commentIcon' src={commentIcon} alt='commentIcon'/>
                      364
                   </div>
               </div>
              </div>
              <div className='post-item'>
               <div className='post-image-wrapper' >
               <img src={'https://chatsapp.blob.core.windows.net/temp/photo-6.jpg'} alt='post-img' />
               </div>
               <div className='post-info' >
                   <div className='post-like-info'>
                      <img className='likeIcon' src={likeIcon} alt='likeIcon'/>
                      18.1k
                   </div>
                   <div className='post-comment-info'>
                      <img className='commentIcon' src={commentIcon} alt='commentIcon'/>
                      364
                   </div>
               </div>
              </div>
            </div>
              {/* <div className='post-item'>
                <img src={photoImg2} alt='post-img' />
              </div>
              <div className='post-item'>
                <img src={photoImg3} alt='post-img' />
              </div>
              <div className='post-item'>
                <img src={photoImg4} alt='post-img' />
              </div>
              <div className='post-item'>
                <img src={photoImg5} alt='post-img' />
              </div>
              <div className='post-item'>
                <img src={photoImg6} alt='post-img' />
              </div>
              <div className='post-item'>
                <img src={photoImg1} alt='post-img' />
              </div> */}
            </div>
          
          
     {showModel &&   <Model>
        <div className='profile-about'>
        <h3>About account</h3>
          <div className='profile-image'>
                <img src={profileImg} alt='profile-img' />
              </div>
              <div className='profile-about-info'>
                <h4 className='name'>Karthi</h4>
                <div className='profile-join-date'>
                <img className='icon' src={calenderIcon} alt='calender-icon' />
                <div>
                <h4 className='title' >Joined</h4>
                <p>12-4-2010</p>
                </div>
              </div>
              <div className='profile-location'>
                <img className='icon' src={locationIcon} alt='location-icon' />
                <div>
                <h4 className='title' >Account based in</h4>
               <p>India</p>
                </div>
              </div>
              </div>
              <span className='underline'></span>
              <div className='profile-about-close-btn' onClick={()=>setShowModel(false)}>
               Close
              </div>
          </div>
        </Model>
     }
        </div>
</div>

      </div>:<div>Loading...</div>}
    </div>
  )
}

export default Profile