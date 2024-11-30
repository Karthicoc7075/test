import React from 'react'
import './Welcome.css'

import model1 from '../../assets/3D/Untitled-15.png'
import model2 from '../../assets/3D/Untitled-13.png'
import model3 from '../../assets/3D/Untitled-11.png'
import model4 from '../../assets/3D/Untitled-7.png'


function Welcome() {
  console.log('this welcome');

  return (
    <div className='welcome'>
      <div className='models' style={{ top: "-8%",left:"10%"}} >
        <img className='img' src={model1} alt='3d-model'/>
      </div>
      <div className='models' style={{ bottom: "-8%",left: "-8%"}}>
        <img className='img' src={model2} alt='3d-model'/>
      </div>
      <div className='models' style={{ top: "6%",right: "10%"}}>
        <img className='img' src={model3} alt='3d-model'/>
      </div>
      <div className='models' style={{    bottom: "10px",right: "-5%",transform:`rotate(-60deg)`}}>
        <img className='img' src={model4} alt='3d-model'/>
      </div>
      <div className='welcome-wrapper'>
        <img className='image' src={'https://chatsapp.blob.core.windows.net/temp/Untitled-1.png'} alt='welocome-img'/>
        <div className='text-content'>
        <h1 className='title  '>Let's get <br/>started</h1>
        <p className='desc'>Connect with each other with chatting.Enjoy safe and private texting </p>
        </div>
      </div>

      
    </div>
  )
}

export default Welcome