import React, { useState } from "react";
import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import profileImg from '../../assets/images/profile-10.jpg'
import pencilIcon from '../../assets/icons/pencil.png';
import editIcon from '../../assets/icons/edit.png';
import closeIcon from '../../assets/icons/cross-mark.png';
import Model from "../../components/Model/Model";
import Navbar from "../../components/Navbar/Navbar";
import userIcon from "../../assets/icons/user (2).png"
import verifiedIcon from "../../assets/icons/verified (1).png"
import notificationIcon from "../../assets/icons/notification (1).png"
import keyIcon from "../../assets/icons/key (1).png"
function Settings() {
    const [showEdit,setShowEdit] = useState(false);
    const [imageFile,setImageFile] = useState();
    // console.log(new FormData(imageFile));

    return (
        <div className="setting-page">
          <Navbar/>
           <div className="setting-page-wrapper">
            <div className='sidebar-fixed'>
        <Sidebar />
        </div>  
            <div className="setting-card">
                <div className="setting-sidebar">
                    <ul className="sidebar-list">
                        <li className="sidebar-item active"><img className="icon" src={userIcon}/><span>Profile</span></li>
                        <li className="sidebar-item"><img className="icon" src={verifiedIcon}/><span>Security</span></li>
                        <li className="sidebar-item"><img className="icon" src={notificationIcon}/><span>Notifications</span></li>
                        <li className="sidebar-item"><img className="icon" src={keyIcon}/><span>Accessibility</span></li>
                    </ul>
                    </div>
                    <div className="setting-profile">
                        <div className="profile-title">
                            <h3>My Profile</h3>
                        </div>

                        <div className="profile-header-info">
                            <div className="profile-header-info-details">
                                <div className="profile-pic">
                                    <img className="image" src={profileImg} alt="profile-img" />
                                </div>
                                <div className="profile-info">
                                    <h4 className="profile-name">Karthi</h4>
                                    <h5 className="profile-bio">Team Manager</h5>
                                    <p className="profile-address">Chennai,India</p>
                                </div>
                            </div>
                            <div className="profile-edit-option">
                                <div className="profile-edit-btn" onClick={()=>setShowEdit(true)}>
                                    Edit
                                    <img className="edit-icon" src={pencilIcon} alt="edit-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="profile-personal-info">
                            <div className="profile-personal" >
                                <h4 className="profile-personal-info-title" >Personal Information</h4>
                                <div className="profile-personal-info-content" >
                                <div className="profile-info-group" >
                                    <p className="profile-label">First Name</p>
                                    <h4 className="profile-name" >Karthi</h4>
                                </div>
                                <div className="profile-info-group" >
                                    <p className="profile-label">Last Name</p>
                                    <h4 className="profile-lastname" >P</h4>
                                </div>
                                <div className="profile-info-group" >
                                    <p className="profile-label">Email address</p>
                                    <h4 className="profile-email" >Karthicoc7075@gmail.com</h4>
                                </div>
                                <div className="profile-info-group" >
                                    <p className="profile-label">Phone</p>
                                    <h4 className="profile-phone" >+9876543210</h4>
                                </div> <div className="profile-info-group" >
                                    <p className="profile-label">Bio</p>
                                    <h4 className="profile-bio" >Team Manager</h4>
                                </div>
                                </div>
                            </div>
                            {/* <div className="profile-edit-option">
                                <div className="profile-edit-btn">
                                    Edit
                                    <img className="edit-icon" src={editIcon} />
                                </div>
                            </div> */}
                        </div>

                        <div className="profile-address-info">
                       <div className="profile-address">
                       <h4 className="profile-address-info-title" >Address</h4>
                            <div className="profile-address-info-content" >
                               
                                <div className="profile-address-info-group" >
                                    <p className="profile-label">Country</p>
                                    <h4 className="profile-country" >India</h4>
                                </div>
                                <div className="profile-address-info-group" >
                                    <p className="profile-label">City/State</p>
                                    <h4 className="profile-state-city" >Chennai Tamilnadu</h4>
                                </div>
                                <div className="profile-address-info-group" >
                                    <p className="profile-label">Postal Code</p>
                                    <h4 className="profile-postal-code" >600 001</h4>
                                </div>
                            </div>
                       </div>
                            {/* <div className="profile-edit-option">
                                <div className="profile-edit-btn">
                                    Edit
                                    <img className="edit-icon" src={editIcon} />
                                </div>
                            </div> */}
                        </div>
                    </div>
           {showEdit &&   <Model>
                <div className="edit-page">
                    <div className="header" >
                      <h3 className="title" >Edit Profile</h3>
                      <div>
                        <img className="icon close-icon" src={closeIcon} alt="close-icon" onClick={()=>setShowEdit(false)}/>
                      </div>
                    </div>
                    <span className="underline"></span>

                    <form className="edit-form">
                    <div className="img-input-group " >
                        <img className="image" src={imageFile ||profileImg} alt="profile-img" />
                         <div className="round">
                         <img className="icon" src={editIcon} alt="edit-icon"/>
                          <input className="profile-img-input input" type="file" onChange={(e)=>setImageFile(e.target.value)}  />
                         </div>
                        </div>
                       <div className="input-container">
                       <div className="input-group" >
                          <label className="firstName-label label" >First Name</label>
                          <input className="firstName-input input" type="text" value={"Karthi"} />
                        </div>
                        <div className="input-group" >
                          <label className="lastName-label label" >Last Name</label>
                          <input className="lastName-input input" type="text" value={"P"} />
                        </div>
                        <div className="input-group" >
                          <label className="phone-label label" >Phone</label>
                          <input className="phone-input input" type="text" value={"+9876543210"} />
                        </div>
                        <div className="input-group" >
                          <label className="birthday-label label" >Birth day</label>
                          <input className="birthday-input input" type="date" onChange={(e)=>console.log(e.target.value)} />
                        </div>
                        <div className="input-group" >
                          <label className="bio-label label" >Bio</label>
                          <input className="bio-input input" type="text" value={"I like coding "} />
                        </div>
                        <div className="input-group" >
                          <label className="work-label label" >Work</label>
                          <input className="work-input input" type="text" value={"Team Manager"} />
                        </div>
                        <div className="input-group" >
                          <label className="company-label label" >Company</label>
                          <input className="company-input input" type="text" value={"Google at USA"} />
                        </div>
                        <div className="input-group" >
                          <label className="web-label label" >Web link</label>
                          <input className="web-input input" type="text" value={"https://vijayrocker-123.web.app/"} />
                        </div>
                        <div className="input-group" >
                          <label className="country-lable label " >Country</label>
                          <input className="country-input input" type="text" value={"India"} />
                        </div>
                        <div className="input-group" >
                          <label className="city-state-label label" >City/State</label>
                          <input className="city-state-input input" type="text" value={"Tiruppur,Tamilnadu"} />
                        </div>
                        <div className="input-group" >
                          <label className="postal-label label" >Postal</label>
                          <input className="postal-input input" type="text" value={"641 654"} />
                        </div>
                       </div>
                       <button className="btn submit-btn">Submit</button>
                    </form>
                </div>
              </Model>}
            </div>
           </div>
        </div>
    );
}

export default Settings;


