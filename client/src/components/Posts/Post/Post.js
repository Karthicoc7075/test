import React, { useEffect, useState,forwardRef } from 'react'
import './Post.css'
import profileImg from '../../../assets/images/profile-2.jpg'
import moreIcon from '../../../assets/icons/menu.png'
import likeIcon from '../../../assets/icons/like.png'
import unlikeIcon from '../../../assets/icons/unlike.png'
import commentIcon from '../../../assets/icons/comment.png'
import shareIcon from '../../../assets/icons/paper-plane.png'
import savedIcon from '../../../assets/icons/saved.png'
import unSavedIcon from '../../../assets/icons/unsaved.png'
import { Link, redirect } from 'react-router-dom'
import Model from '../../Model/Model'
import { useDispatch, useSelector } from 'react-redux'
import { likePost,savedPost} from '../../../features/post/actions/postActions'
import moment from 'moment'
import Loader from '../../Loader/Loader'
import PostDetails from '../../PostDetails/PostDetails'
import axios from 'axios'
 
 function Post({ user, index,post, setShowMoreOptions, showMoreOptions,setShowPostDetails,setPostId }) {
    const [imageLoading,setImageLoading] = useState(true)
    const dispatch = useDispatch()
console.log('post:',post);

   const commentHandle=()=>{
    setPostId(post._id)
    setShowPostDetails(true)
   }

   const likeHandle=()=>{
    dispatch(likePost(post._id ))
   }

const profileHandle=()=>{
    redirect(`/profile/${post.user?._id}`)
}
    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-header' >
                    <div className='post-header-profile-info' >
                        <div className='post-profile-img'  >
                            <img className='image' src={post.user?.profileImage} alt='profile-img' />
                        </div>
                        <div className='post-name-date' >
                            <Link to={`/profile/${post.user?._id}`} className='post-profile-name' >{post.user?.username}</Link>
                            <p className='post-date'>{moment(post.createdAt).fromNow()}</p>
                        </div>
                    </div>
                    <div className='post-header-profile-more'>
                        <div className='more-icon icon' onClick={() => setShowMoreOptions(true)}>
                            <img src={moreIcon} alt='menu-icon' />
                        </div>
                    </div>
                </div>
                <div className='post-content' >

                    <div className='post-image'>
                    
                        <img className='image' src={post.image} alt='imgage can`t loaded!!'  onLoad={()=>setImageLoading(false)} style={{ display: imageLoading ? 'none' : 'block' }} />
                     {imageLoading&& <div className='image-loading'> <Loader size="sm" color="bl"/> </div>}
                        {/* <video controls autoPlay src={post?.imageUrl} alt="helo"></video> */}

                    </div>
                    <div className='post-desc' >
                        {post.desc}
                    </div>
                </div>
                <div className='post-footer' >
                    <div className='post-meta-data'>
                        <div className='post-meta-data-like'>
                            <div className='like-icon' onClick={() =>likeHandle() } >
                                <div className='like-icon' >
                                    <img className='icon' src={post.userLiked ? likeIcon : unlikeIcon} alt='comment-icon' />
                                </div>
                                <span className={post.userLiked ? 'like-count count isLike' : 'like-count count'}>{post.likes}</span>
                            </div>
                            <div className='post-meta-data-comment' >
                                <div className='comment-icon' onClick={()=>commentHandle()} >
                                    <img className='icon' src={commentIcon} alt='comment-icon' />
                                </div>
                                <span className='comment-count count' >{post.comments}</span>

                            </div>

                            <div className='post-meta-data-share' >
                                <div className='share-icon' >
                                    <img className='icon' src={shareIcon} alt='share-icon' />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='post-bookmark' >

                        <div className='bookmark-icon' >
                            <img className='icon' src={post.userSaved ? savedIcon : unSavedIcon} alt='view-icon' onClick={() => dispatch(savedPost(post._id))} />
                        </div>

                    </div>

                </div>

                {/* <div className='comment-wrapper'>
                    <h3 className='title'>Comments</h3>
                  
                    <div className='comment'>
                        <div className='comment-content'>
                            <div className='userImage'>
                            <img className='image userImg' src={post.userImage} alt='imgage can`t loaded!!' />
                            </div>
                            
                            <div className='username-message-reply'>
                                <h3 className='username'>Karthi</h3>
                                <p className='message'>hello world hello world hello world hello world hello world hello worldhello world v v vhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world</p>
                                <p className='reply'>Reply</p>
                            </div>
                        </div>
                        <div className='comment-like-timestamp'>
                        <img className='icon like-icon' src={changeIcon ? likeIcon : unlikeIcon} onClick={() => setChangeIcon(!changeIcon)} />
                        <h5 className='time-stamp'>5 min</h5>
                    </div>
                    </div>

                    <div className='comment'>
                        <div className='comment-content'>
                            <div className='userImage'>
                            <img className='image userImg' src={post.userImage} alt='imgage can`t loaded!!' />
                            </div>
                            
                            <div className='username-message-reply'>
                                <h3 className='username'>Karthi</h3>
                                <p className='message'>hello world</p>
                                <p className='reply'>Reply</p>
                            </div>
                        </div>
                        <div className='comment-like-timestamp'>
                        <img className='icon like-icon' src={changeIcon ? likeIcon : unlikeIcon} onClick={() => setChangeIcon(!changeIcon)} />
                       
                        <h5 className='time-stamp'>5 min</h5>
                    </div>
                    </div>
                   
                     <div className='comment'>
                       <div className='comment-user-info'>
                        <img className='image comment-img' src={post.imageUrl} alt='imgage can`t loaded!!' />
                        <h5>Karthi</h5>
                        </div>
                        <div className='comment-content'>
                            <p className='message'>hello world</p>
                        </div>
                       </div> 
                </div> */}

                {
                    showMoreOptions &&
                    <Model  >
                        <div className="moreInfo-model">
                            <ul className="moreInfo">
                                <li className="moreInfo-item" >Report</li>
                                <li className="moreInfo-item" >Add to favorites</li>
                                <li className="moreInfo-item" >Profile Info</li>
                                <li className="moreInfo-item" >Share to...</li>
                                <li className="moreInfo-item" >Copy link</li>
                                <li className="moreInfo-item" onClick={() => setShowMoreOptions(false)} >Cancel</li>

                            </ul>
                        </div>
                    </Model>
                }

            </div>
        </div>


    )
}

export default Post