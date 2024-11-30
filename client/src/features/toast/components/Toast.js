import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { removeToast } from '../actions/toastAction';
import 'react-toastify/dist/ReactToastify.css';


const Toast = () => {
  const [displayedToasts, setDisplayedToasts] = useState([]); 
  const dispatch = useDispatch();
  const toasts = useSelector(state => state.toast.toasts);
   

  
    useEffect(() => {
      toasts.forEach(({ id, message, type }) => {
       if(!displayedToasts.includes(id)){
        toast[type](message, {
            style: { background:'#ffffff' , color:'#1A1A1A' },
            onClose: () => dispatch(removeToast(id)),
            autoClose: 4000
          });
          setDisplayedToasts(prev=>[...prev,id])
       }
      });
    }, [toasts,displayedToasts, dispatch]);
  
    return <ToastContainer/>
  };

export default Toast;