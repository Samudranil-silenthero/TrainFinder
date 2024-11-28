import React, { useContext } from 'react'
import { useState, useEffect,useRef } from 'react'
import axios from 'axios'
// import '../component_style/popup.css'
import { Context } from '../context/Context';

function PopUp(props) {

  return (
    <div className='all_item'>
            <table className='paytable'>
                    <tr>
                        <th>Source_stn_name</th>
                        <th>Arrival time</th>
                        <th>Departure time</th>
                        <th>Distance (km)</th>
                        <th>Day</th>
                    </tr>
                {props.trainroute.map((x) => (
                    <tr>
                        <td>{x.source_stn_name} ({x.source_stn_code})</td>
                        <td>{x.arrive}</td>
                        <td>{x.depart}</td>
                        <td>{x.distance}</td>
                        <td>{x.day}</td>
                    </tr>
                ))}
            </table>
</div>
  
)}

export default PopUp

