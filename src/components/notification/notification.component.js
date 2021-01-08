import React from 'react'
import { useSelector } from 'react-redux'
import './notification.style.css'

const Notification = () => {
  const noti = useSelector(state => state.notification)
  return (
    noti?(<div className='noti'>
      {noti}
    </div>):(null)
   
  )
}

export default Notification