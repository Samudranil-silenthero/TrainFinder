import React from 'react'
import '../../component_style/train/train.css'

function Train() {


  return (
    <div className='train_menu'>
        <a href='/train/train_no' className='train_menu_item'>Search Train By Number</a>
        <a href='/train/betweenstation' className='train_menu_item'>Search Train Between Stations with date</a>
    </div>
  )
}

export default Train
