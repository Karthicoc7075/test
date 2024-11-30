import React,{useState,useEffect, useCallback, useMemo} from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'
import PostShare from '../../components/PostShare/PostShare'
import Navbar from '../../components/Navbar/Navbar'
import SideCard from '../../components/SideCard/SideCard'
import Details from '../../components/Details/Details'
import { useDispatch, useSelector } from 'react-redux'
function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const isWindow = typeof window !== "undefined";
  const dispatch = useDispatch()
  const getWidth = () => (isWindow ? window.innerWidth : screenWidth);
  const resize = () => setScreenWidth(getWidth());

  useEffect(() => {
    if (isWindow) {
      setScreenWidth(getWidth());
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }

   
  }, [isWindow]);

   


   if (window.performance && window.performance.memory) {
    var memoryInfo = window.performance.memory;
    console.log("Memory Usage:", Math.floor(memoryInfo.usedJSHeapSize/1048576),"MB");
  }
  return (
    <div className="home">
      {/* <div className='navbar-fixed'> */}
    
        {/* </div>   */}
      <div className='home-page' >
      <Navbar />
        <div className='home-page-wrapper' >  
        <div className='sidebar-fixed'>
        <Sidebar />
        </div>  
          <div className='posts-container' >
            <PostShare/>
           <Posts/>
          </div>
          {screenWidth >1000 && <SideCard/>}
        <div>
        {/* <Details/> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home


// if (window.performance && window.performance.memory) {
//   var memoryInfo = window.performance.memory;
//   console.log("Memory Usage:", memoryInfo.usedJSHeapSize/1048576, "megabytes");
// }