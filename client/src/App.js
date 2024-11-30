import React, { useEffect } from 'react';
import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import Notfound from './components/Notfound/Notfound';  
import {  Navigate, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import Toast from './features/toast/components/Toast'
function App() { 
  const auth = useSelector(state => state.auth.isAuthenticated)

  // const auth = true

  if(auth){
    console.log(auth);
  }

 

  return (  
    <div className="App">
      {/* <Auth/> */}


      <div className='blur' style={{ top: "10%", right: "10%" }} ></div>
      <div className='blur' style={{ top: "18%", left: "0%" }}></div>
      <div className='blur' style={{ bottom: "10%", right: "0" }} ></div>
      <div className='blur' style={{ bottom: "0%", left: "0" }} ></div>
      <Toast/>
      
        <Routes>
          <Route path='/'  exact element={auth ? <Navigate to='/home' />:<Auth />} />
          <Route path='/home' exact element={auth ?   <Home/>:<Navigate to='/' />} />
          <Route path='/chat' exact element={auth ?  <Chat />:<Navigate to='/'/>} />
          <Route path='/chat/:userId' exact element={ auth ? <Chat />:<Navigate to='/' />} />
          <Route path='*' exact element={auth ? <Notfound />:<Navigate to='/' />} />
          <Route path='/settings' element={auth ?  <Settings/>:<Navigate to='/' />}/>
          <Route path='/profile' element={auth ?  <Profile/>: <Navigate to='/' />}/>
          <Route path='/profile/:userId' element={auth ?  <Profile/>:<Navigate to='/' />}/>
        </Routes>
{/* <Routes>
          <Route path='/'  exact element={ <Auth />} />
          <Route path='/home' exact element={  <Home/>}/>
          <Route path='/chat' exact element={ <Chat />} />
          <Route path='/chat/:userId' exact element={ <Chat />} />
          <Route path='*' exact element={<Notfound />} />
          <Route path='/settings' element={ <Settings/>}/>
          <Route path='/profile' element={ <Profile/>}/>
          <Route path='/profile/:userId' element={ <Profile/>}/>
        </Routes> */}
    </div>


  );
}

export default App;