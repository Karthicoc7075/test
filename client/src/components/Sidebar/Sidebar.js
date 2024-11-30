import React from 'react'
import './Sidebar.css'
import homeIcon from '../../assets/icons/home.png'
import chatIcon from '../../assets/icons/chat.png'
import settingIcon from '../../assets/icons/setting.png'
import userIcon from '../../assets/icons/user (1).png'
import {Link} from 'react-router-dom'
function sidebar() {
  return (
    <div className='sidebar' >
      <div className='sidebar-wrapper' >
        <div className='sidebar-logo' >
          
        </div>
      <div className='sidebar-link-container'>
      <div className='sidebar-link-list' >
         <Link className='sidebar-link' to='/home'><img className='icon' src={homeIcon}/> <span>Home</span></Link>
         <Link className='sidebar-link' to='/chat'><img className='icon' src={chatIcon}/> <span>All chats</span></Link>
        
        </div>
        <div className='sidebar-link-list' >
         <Link className='sidebar-link' to='/profile'><img className='icon' src={userIcon}/> <span>Profile</span></Link>
         <Link className='sidebar-link' to='/settings'><img className='icon' src={settingIcon}/> <span>Setting</span></Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default sidebar