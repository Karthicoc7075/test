import React,{forwardRef} from 'react'
import './Loader.css'

const Loader = forwardRef(({color,size},ref)=> {
  return (
    <div className={`loader ${color} ${size} `} ref={ref}  ></div>
  )
})

export default Loader