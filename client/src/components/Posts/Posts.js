import React, { useRef, useState,useEffect } from 'react'
import './posts.css'
import Post from './Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import Model from '../Model/Model'
import PostDetails from '../PostDetails/PostDetails'
import { getPosts } from '../../features/post/actions/postActions'
import { getAuthSelector } from '../../features/auth/selectors/authSelector'
import { getPostsSelector,getPostStopSelector } from '../../features/post/selectors/postSelectors' 

function Posts() {
  const [showMoreOptions, setShowMoreOptions] = useState(false)    
  const [showPostDetails, setShowPostDetails] = useState(false)
  const [postId,setPostId] = useState(null)
  const [loading,setLoading]= useState(true)
  const [currentPage,setCurrentPage] = useState(1)

  const postReducer = useSelector(getPostsSelector)
  const userReducer = useSelector(getAuthSelector)
  const getPostStop = useSelector(getPostStopSelector)
console.log(getPostStop);

  const dispatch = useDispatch()
  const lastPostRef = useRef(null);
// console.log(postReducer);

useEffect(()=>{
  fetchPosts()

    setLoading(false)
  
   },[])

useEffect(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '100px',
    threshold: .10,
  });

  if (lastPostRef.current) {
    observer.observe(lastPostRef.current);
  }

return ()=> observer.disconnect() ;
}, [lastPostRef,postReducer]);


let isFetching = false;

const handleIntersection = (entries) => {
 if(!isFetching){
  const target = entries[0];
  if (target.isIntersecting) {
    isFetching=true
    fetchPosts()
  }
 }
};


 const fetchPosts =()=>{
  dispatch(getPosts(currentPage))
  setCurrentPage(prevPage=>prevPage+1)
  isFetching=false
 }
console.log(postReducer);

  return (
    <>
      {loading ?

        <div className='loader-wrapper'>
          <Loader color='bl' size='md' />
        </div>
        :
        <section className='posts' >

          {postReducer.map((post,index) => {
            return <Post 
            key={index}
            index={index}
              
              user={userReducer.user}
              post={post}
              showMoreOptions={showMoreOptions}
              setShowMoreOptions={setShowMoreOptions}
              showPostDetails={showPostDetails}
              setShowPostDetails={setShowPostDetails}
              setPostId={setPostId}
            />
          })}

{getPostStop ? <h1 className='error post-over '>Post over</h1> : <Loader size='sm' color='bl' ref={lastPostRef}  /> }


         {showPostDetails &&
         <Model>
          <PostDetails postId={postId}   showPostDetails={showPostDetails} setShowPostDetails={setShowPostDetails}/>
         </Model>}
        </section>}

      
    </>

  )
}

export default Posts

