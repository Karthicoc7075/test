import React,{useState} from 'react'
import './PostShare.css'
import picIcon from '../../assets/icons/picture.png'
import videoIcon from '../../assets/icons/video.png'
import gifIcon from '../../assets/icons/gif.png'
import axios from 'axios'
import { API } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../features/post/actions/postActions'
import { getAuthSelector } from '../../features/auth/selectors/authSelector'

function PostShare() {
  const [file,setFile] = useState()
  const [desc,setDesc] = useState('')
  const formData =new FormData()
  const dispatch = useDispatch()
  const {_id,firstName,profilePic} = useSelector(getAuthSelector)

  formData.append('file',file)
  formData.append('userId',_id)
  formData.append('desc',desc)
  formData.append('username',firstName)
  formData.append('userImage',profilePic)
  // console.log(...formData);

  const uploadPost =(e)=>{
    // e.preventDefault();
// console.log('upload!!');
       if(!file){
        alert('data empty')
       }

     dispatch(createPost(formData))
  }
  return (
    <div className='postShare'>
        <div className='postShare-wrapper'>
          <div className='post-input'>
            <input type='text' placeholder='What`s on your mind ?' onChange={(e)=>setDesc(e.target.value)} value={desc} />
          </div>
           <div className='post-options'>
             <div className='post-option picIcon' >
              <input type="file" className='input-file' onChange={(e)=>setFile(e.target.files[0])}/>
              <img className='icon picIcon' src={picIcon} alt='pic-icon'/>
              <h5>Picture</h5>
             </div>
             <div className='post-option videoIcon'>
             <input type="file" className='input-file'/>
              <img className='icon vidIcon' src={videoIcon} alt='video-icon'/>
              <h5>Videos</h5>
             </div>
             <div className='post-option gifIcon'>
              <img className='icon gifIcon' src={gifIcon} alt='gif-icon'/>
              <h5>Gif</h5>
             </div>
             <div className='post-option'>
                <button className='btn share-btn' onClick={()=>uploadPost()}>Share</button>
             </div>
           </div>
        </div>
    </div>
  )
}

export default PostShare