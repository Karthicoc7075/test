import React from 'react'
import './Toaster.css'

function Toaster(props) {
  return (
    <div className={props.isError ?`toaster red `:`toaster green `}>
        <p className='msg'>{props.msg}</p>
    </div>
  )
}

export default Toaster