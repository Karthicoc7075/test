import React from 'react'
import './Notfound.css'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <div className='notfound' >
      {/* <img src='' alt='not-found-img'/> */}
      <h1 >404</h1>
        <h2>Ooops... Page Not found!</h2>
        <Link className='btn' to={'/'}>Go back</Link>
    </div>
  )
}

export default Notfound