import React from 'react'
import './Chatdetails.css'
import closeIcon from '../../assets/icons/close.png'
import fileIcon from '../../assets/icons/file (1).png'
import downloadIcon from '../../assets/icons/download.png'
import linkIcon from '../../assets/icons/link.png'
import profileImg from '../../assets/images/profile-7.jpg'


function Chatdetails({setShowProfileDetails}) {
  return (
    <div className='chat-details' >
       <div className='chat-details-wrapper'>
       <div className='chat-details-header' >
             <h3>Chat Details</h3>
             <img className='closeIcon icon' src={closeIcon} alt='closeIcon' onClick={()=>setShowProfileDetails(false)} />
        </div>
       <div className='chat-profile' >
       <div className='chat-profile-details' >
          <img className='profile-img' src={profileImg} alt='profile-img' />
          <h4 className='profile-name'>George</h4>
          <p className='profile-status'>online</p>
        </div>
        <div className='chat-media' >
           <div className='chat-media-header' >
               <div className='chat-media-header-info' >
               <h3 className='chat-media-title' >Photos and Videos</h3>
                <p className='chat-media-count' >34</p>
               </div>
               <button className='see-all-btn' >See all</button>
           </div>
           <div className='chat-media-content'>
           <img className='chat-media-image chat-media-image-1' src={'https://chatsapp.blob.core.windows.net/temp/photo-1.jpg'}  alt='media-img'/>
           <img className='chat-media-image  chat-media-image-2' src={'https://chatsapp.blob.core.windows.net/temp/photo-2.jpg'}  alt='media-img'/>
           <img className='chat-media-image chat-media-image-2' src={'https://chatsapp.blob.core.windows.net/temp/photo-3.jpg'}  alt='media-img'/>
           <div className='chat-media-image-count' >14+</div>
           </div>
        </div>
        <div className='chat-files' >
           <div className='chat-file-header' >
               <div className='chat-file-header-info' >
               <h3 className='chat-file-title' >Files</h3>
                <p className='chat-file-count' >56</p>
               </div>
               <button className='see-all-btn' >See all</button>
           </div>
           <div className='chat-files-content'>
           <div className='chat-file' >
            <div className='chat-file-icon' >
              <img  className='fileIcon icon'src={fileIcon} alt='fileIcon'/>
            </div>
              <h4 className='file-name' >Free for personal and commercial use with attribution. </h4>
              <div className='chat-file-download-icon' >
              <img  className='download-icon 'src={downloadIcon} alt='downloadIcon'/>
            </div>
           </div>
           <div className='chat-file' >
            <div className='chat-file-icon' >
              <img  className='fileIcon icon'src={fileIcon} alt='fileIcon'/>
            </div>
              <h4 className='file-name' >Total project cost</h4>
              <div className='chat-file-download-icon' >
              <img  className='download-icon 'src={downloadIcon} alt='downloadIcon'/>
            </div>
           </div>
           <div className='chat-file' >
            <div className='chat-file-icon' >
              <img  className='fileIcon icon'src={fileIcon} alt='fileIcon'/>
            </div>
              <h4 className='file-name' >Total project cost</h4>
              <div className='chat-file-download-icon' >
              <img  className='download-icon 'src={downloadIcon} alt='downloadIcon'/>
            </div>
           </div>
           <div className='chat-file' >
            <div className='chat-file-icon' >
              <img  className='fileIcon icon'src={fileIcon} alt='fileIcon'/>
            </div>
              <h4 className='file-name' >Total project cost</h4>
              <div className='chat-file-download-icon' >
              <img  className='download-icon 'src={downloadIcon} alt='downloadIcon'/>
            </div>
           </div>
           </div>
        </div>
        <div className='chat-links' >
           <div className='chat-link-header' >
               <div className='chat-link-header-info' >
               <h3 className='chat-link-title' >Links</h3>
                <p className='chat-links-count' >12</p>
               </div>
               <button className='see-all-btn' >See all</button>
           </div>
           <div className='chat-links-content' >
           <div className='chat-link' >
            <div className='chat-link-icon' >
              <img  className='link-icon icon'src={linkIcon} alt='likeIcon'/>
            </div>
              <h4 className='file-name' >www.youtube.com</h4>
           </div>
           <div className='chat-link' >
            <div className='chat-link-icon' >
              <img  className='link-icon icon'src={linkIcon} alt='likeIcon'/>
            </div>
              <h4 className='file-name' >https://web.whatsapp.com/</h4>
           </div>
           <div className='chat-link' >
            <div className='chat-link-icon' >
              <img  className='link-icon icon'src={linkIcon} alt='likeIcon'/>
            </div>
              <h4 className='file-name' >https://www.flaticon.com/free-icon</h4>
           </div>
           <div className='chat-link' >
            <div className='chat-link-icon' >
              <img  className='link-icon icon'src={linkIcon} alt='likeIcon'/>
            </div>
              <h4 className='file-name' >www.youtube.com</h4>
           </div>
           </div>
        </div>

       </div>
       </div>
       </div>
  )
}

export default Chatdetails