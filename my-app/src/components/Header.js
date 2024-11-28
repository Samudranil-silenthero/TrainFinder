import React from 'react'
import '../component_style/header.css'

function Header() {
  return (
     <div className='navbar'>
        <div className='nleft1'>
            <a href='/train/train_no' className='linkhead'><img className="logoimage" src={require('./images/train.JPG')}/></a>
         </div>
         <div className='nleft2'>
            <h1>Train Management System (Indian Railways)</h1>
         </div>
     </div>
  )
}

export default Header