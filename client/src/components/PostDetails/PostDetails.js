import React,{useEffect, useState,useRef} from 'react'
import './PostDetails.css'
import moreIcon from '../../assets/icons/menu.png'
import likeIcon from '../../assets/icons/like.png'
import unlikeIcon from '../../assets/icons/unlike.png'
import shareIcon from '../../assets/icons/paper-plane.png'
import savedIcon from '../../assets/icons/saved.png'
import unSavedIcon from '../../assets/icons/unsaved.png'
import CloseIcon from '../../assets/icons/cross.png'
import SmileIcon from '../../assets/icons/face.png'
import {createPostComment,likePost,savedPost,getPostComments,clearComments} from '../../features/post/actions/postActions' 
import {getPostsSelector,getPostCommentsSelector,getPostCommentsLoadingSelector,getPostCommentsStopSelector} from '../../features/post/selectors/postSelectors'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import moment from 'moment'



function PostDetails({postId,setShowPostDetails}) {
    const [commentInput,setCommentInput]= useState('')
    const [changeIcon, setChangeIcon] = useState(false)
    const [imageLoading,setImageLoading]= useState(false)
    const [currentPage,setCurrentPage] = useState(1)
    const [postData,setPostData] = useState(null)
    const [getPostLoading,setPostLoading] = useState(true)
    const dispatch = useDispatch()
    const getPostDatas = useSelector(getPostsSelector)

    const PostCommentsData = useSelector(getPostCommentsSelector)
    const getCommentsLoading = useSelector(getPostCommentsLoadingSelector)
    const getAllComments = useSelector(getPostCommentsStopSelector)
    const lastCommentRef = useRef(null);

    

useEffect(()=>{
console.log('useEffect');

  const fetchData=()=>{
        getPostData()
    dispatch(clearComments())
    fetchComments()
    setPostLoading(false)
    }
    

    fetchData()
},[])


useEffect(()=>{

    getPostData()
}
,[getPostDatas])

console.log(postId);
console.log(getPostDatas);


const getPostData =()=>{
    const post = getPostDatas.find(post=>post._id == postId)
console.log(post);

    setPostData(post)
}

 
useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '100px',
      threshold: .10,
    });
  
    if (lastCommentRef.current) {
      observer.observe(lastCommentRef.current);
    }
  
  return ()=> observer.disconnect() ;
  }, [lastCommentRef,PostCommentsData]);
  
  
  let isFetching = false;
 
  const handleIntersection = (entries) => {
   if(!isFetching){
    const target = entries[0];
    if (target.isIntersecting) {
      isFetching=true
      fetchComments()
    }
   }
  };

const sendComment=(e)=>{
    e.preventDefault()
   const commentData = {postId:postData._id,message:commentInput,user:postData.user._id}
dispatch(createPostComment(commentData))
setCommentInput('')
}


const fetchComments=()=>{
        dispatch(getPostComments(postId,currentPage))
        setCurrentPage(prevPage=>prevPage+1)
}

const likePostHandler=()=>{
    dispatch(likePost(postData._id))
}
console.log(postData);



    return (
        <div className='postDetails-wrapper'>
            <div className='postDetails'>
                
                    {
                        getPostLoading ?

                    <div className='loader-wrapper'>
                        <Loader size='md' color='bl' />
                    </div>
                    :

                <div className='postDetails-grid' >
               {window.innerWidth >=768 &&
                <div className='post-image'>
                 {!imageLoading ? 
                 <img className='postImg' src={postData.image} alt='imgage can`t loaded!!'  onLoad={()=>setImageLoading(false)} style={{ display: imageLoading ? 'none' : 'block' }} />:
<div className='image-loading-wrapper'>
<Loader size={'md'} color={'bl'}/>
    </div>

               }</div>}


              <div className=' post-info'>
              <div className='post-info-header'>
                    <div className='post-info-header-userInfo'>
                        <div className='user-image'>
                        <img  className='userImage' src={postData.user.profileImage}  />
                        </div>
                        <div className='username'>
<h3>{postData.user.username}</h3>
<div className='time-stamp'>
<p>5 min ago</p>
</div>
                        </div>
                    </div>

                    <div className='post-more-option'>
                        <div className='moreIcon-wrapper'>
                            <img className='icon moreIcon' src={moreIcon}/>
                        </div>
                    </div>
                </div>


                 <div className='comment-wrapper'>
                    <h3 className='title'>Comments</h3>
                  <div>
                  {PostCommentsData.length>=1 ?
                <div>
                    {PostCommentsData.map((comment,i)=>{
  return <div className='comment' key={i}>
   <div className='comment-content'>
       <div className='userImage'>
       <img className='image userImg' src={comment.user.profileImage} alt='imgage can`t loaded!!' />
       </div>
       
       <div className='username-message-reply'>
           <h3 className='username'>{comment.user.username}</h3>
           <p className='message'>{comment.message}</p>
           <p className='reply'>Reply</p>
       </div>
   </div>
   <div className='comment-like-timestamp'>
   <img className='icon like-icon' src={changeIcon ? likeIcon : unlikeIcon} onClick={() => setChangeIcon(!changeIcon)} />
   <h5 className='time-stamp'>{}</h5>
</div>
</div>               
                  }
                  )
                }
                {!getAllComments && <div className='loader-wrapper'><Loader size='sm' color='bl' ref={lastCommentRef}  /></div>
                     }
                    </div>:
                   <div>
{getPostComments.length ==0 && getCommentsLoading ?
<div>
<div className='loader-wrapper'><Loader size='md' color='bl'   /></div>
</div>:
 <div>
 <h2 className='no-comments-text'>No comments</h2>
</div>
}
                    
                    </div>


                }
                </div>
            
                    </div>
                    
                    <div className='postDetails-footer' >
                 <div className='postDetails-meta-data-saved'>
                 <div className='postDetails-meta-data'>
                        <div className='postDetails-meta-data-like'>
                            <div className='like-icon' onClick={() => likePostHandler() } >
                                <div className='like-icon' >
                                    <img className='icon' src={postData.userLiked  ? likeIcon : unlikeIcon} alt='comment-icon' />
                                </div>
                                <span className={postData.userLiked ? 'like-count count isLike' : 'like-count count'}>{postData.likes} Likes</span>
                            </div>
                      

                            <div className='postDetails-meta-data-share' >
                                <div className='share-icon' >
                                    <img className='icon' src={shareIcon} alt='share-icon' />
                                </div>
                                <span className='share-count count' >Share</span>
                            </div>

                        </div>
                    </div>
                    <div className='postDetails-bookmark' >

                        <div className='bookmark-icon' >
                            <img className='icon' src={ postData.userSaved ? savedIcon : unSavedIcon} alt='view-icon' onClick={() => dispatch(savedPost(postData._id))} />
                        </div>

                    </div>
                 </div>
                 <div className='comment-post'>
   <div className='smile-icon'>
   <img className='icon smileIcon' src={SmileIcon}/>
   </div>
<form className='comment-input-submit' onSubmit={(e)=>sendComment(e)}>
<input className='input commentInput' onChange={(e)=>setCommentInput(e.target.value)} value={commentInput} placeholder='comment...'/>
{!getCommentsLoading ?<button className='btn postBtn' >Post</button>:<div className='message-loader'><Loader size='xs' color='bl'/></div>}
</form>
</div>
             
                </div>
           
              </div>
              
          

</div>
            }
              <div className='close-btn'>
 <img className='icon close-icon' src={CloseIcon} onClick={()=>setShowPostDetails(false)} /> 
            </div>
            </div>


        </div>
    )
}

export default PostDetails