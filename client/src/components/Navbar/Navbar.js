import React,{useEffect, useState} from 'react'
import './Navbar.css'
import homeIcon from '../../assets/icons/home.png'
import chatIcon from '../../assets/icons/chat.png'
import settingIcon from '../../assets/icons/setting.png'
import userIcon from '../../assets/icons/user (1).png'
import avater from '../../assets/images/profile-10.jpg'
import Logo from '../../assets/images/logo.png'
import NotiIcon from '../../assets/icons/menu.png'
import {Link, redirect  } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {jwtDecode} from 'jwt-decode'
import {logout} from '../../features/auth/actions/authActions'
import {getAuthSelector} from '../../features/auth/selectors/authSelector'

function Navbar() {
  const [showMoreModel,setMoreModel] = useState(false)
  const dispatch = useDispatch()
  const auth= useSelector(getAuthSelector)
 console.log('auth:',auth);
 

  
  
  useEffect(()=>{
    const jwtDecodeHeader =jwtDecode(auth?.token);

    if(jwtDecodeHeader){
     const expireDate= jwtDecodeHeader.exp*1000;
    //  console.log('user expire time:',new Date(expireDate));
      if(new Date()>expireDate) logoutFunc();
    }
  })


  const logoutFunc =()=>{
    // console.log('logout!!');
    dispatch(logout())
    redirect('/')
  }


  return (
    <div className='navbar' >
      <div className='navbar-wrapper' >
        <div className='navbar-logo' >
          <img src={Logo}/>
        </div>
    
      <div className='navbar-link-list' >
         {/* <a className='navbar-link' href='/home'><input type="radio" /> <span>Dark</span></a> */}
         <a className='navbar-link' href='/settings'><img className='avater' src={avater}/></a>

         <a className='navbar-link'  onClick={()=>setMoreModel(!showMoreModel)}><img className='icon' src={NotiIcon}/> </a>
        </div>
        {
        showMoreModel && <div className="moreInfo-model">
        <ul className="moreInfo">
              <li className="moreInfo-item" onClick={()=>{setMoreModel(false)}}>Profile Info</li> 
              <li className="moreInfo-item" onClick={()=>logoutFunc()} >Logout</li>
            
        </ul>
    </div>
      }
      </div>
    
    </div>
  )
}

export default Navbar