import React from 'react'
import './Conversation.css'
import { useNavigate } from 'react-router-dom'


// import pinImg from '../../assets/icons/'
function Conversation({name,img,id}) {
   const navigate = useNavigate()
   const handleClick = (e) => {
     navigate(`/chat/${id}`)
   }
  
  return (
    <h2 className='conversation' onClick={(e)=>handleClick(e) }>

      <div className='conversation-container' >
        <div className='conversation-profileImg' >
          <img  className='image' src={img} alt='profile-img'/>
        </div>

        <div className='conversation-info' >

          <div className='conversation-headerInfo'  >
            <h5 className='conversatidce5ff9f-8076-5fd9-a9c3-28ab441a9490on-name' >{name}</h5>
            <p className='conversation-time ' >4 m</p >
          </div>

          <div className='conversation-message' >
          <p className='conversation-last-message' >I want to ask to pick....</p>
          <div className='conversation-unread-message' >5</div>
          {/* <img src={pinImg} /> */}
          </div>
        </div>
      </div>

    </h2>
  )
}

export default Conversation