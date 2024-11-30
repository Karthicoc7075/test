import React from 'react'
import './Model.css'

function Model({children}) {
   
  return (
    <div className='model-wrapper'  >
       <div className='model'>
       {children}
       </div>
    </div>
  )
}

export default Model