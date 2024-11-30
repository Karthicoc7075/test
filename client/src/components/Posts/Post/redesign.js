import React, { useState } from 'react'
import './redesign.css'
import profileImg from '../../../assets/images/profile-2.jpg'
import moreIcon from '../../../assets/icons/menu1.png'
import likeIcon from '../../../assets/icons/like-symbol.png'
import commentIcon from '../../../assets/icons/comment.png'
import shareIcon from '../../../assets/icons/paper-plane.png'
import viewIcon from '../../../assets/icons/view.png'
import { Link } from 'react-router-dom'
import Model from '../../Model/Model'

function  Redesign(post) {
  const [showMoreModel,setShowMoreModel] = useState(false)

console.log(post);
    return (
        <div className='redesign' >
            <div className='redesign-wrapper'>
               <div className='redesign-image'>
               <img className='image' src={post.imageUrl} alt='imgage can`t loaded!!' />
               </div>
               <div className='redesign-header' >
<div className='redesign-header-profile-info' >
    <div className='redesign-profile-img' >
        <img className='image' src={profileImg} alt='profile-img' />
    </div>
    <div className='redesign-name-date' >
        <Link to='/profile/id' className='redesign-profile-name' >Ali Husni</Link>
        
    </div>
</div>
<div className='redesign-header-profile-more'>
    <div className='more-icon icon' onClick={()=>setShowMoreModel(true)}>
        <img src={moreIcon} alt='menu-icon' />
    </div>
</div>


</div>
<div className='redesign-metadata' >
<div className='redesign-metadata-like'>
    <div className='like-icon' >
        <img className='icon' src={likeIcon} alt='like-icon' />
    </div>
    <span className='like-count count'>{post.likes.length} Love</span>
</div>
<div className='redesign-metadata-comment' >
    <div className='comment-icon' >
        <img className='icon' src={commentIcon} alt='comment-icon' />
    </div>
    <span className='comment-count count' >134</span>

</div>

<div className='redesign-metadata-share' >
    <div className='share-icon' >
        <img className='icon' src={shareIcon} alt='share-icon' />
    </div>
    <span className='share-count count' >Share</span>

</div>


</div>
</div>
            </div>
        // </div>
    )
}

export default Redesign




