import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../../component_style/train/train_id.css'
import Popup from 'reactjs-popup';

function Train_id(props) {
  const [trainroute,settrainroute]=useState([]);
  
  const TrainDay = ({ running_days, day }) => {  
    return (
      running_days==='1'?
      <span style={{ color:'green', fontWeight:'bolder' }}>{day}</span>:
      <span style={{ color:'red' }}></span>
    );
  };
  
  const view_train_route=async (train_no)=>{
    try {
      const train_details = await axios.get("https://indian-railway-api.cyclic.app/trains/getRoute?trainNo="+ train_no );
      if(train_details.data.success===false) throw Error("Train not found");
      settrainroute(train_details.data.data);
      console.log(trainroute);
    } 
    catch (err) {
        console.log("Train not found")
    }
  }


  return (
    <div className='roww'>

          <div className='firstrow'>

            <div className='firstrowl1'>{props.train_details.train_name} ({props.train_details.train_no})</div>

            <div className='firstrowc1'>Runs on:
                <TrainDay running_days={props.train_details.running_days[0]} day="Mon " />
                <TrainDay running_days={props.train_details.running_days[1]} day="Tue " />
                <TrainDay running_days={props.train_details.running_days[2]} day="Wed " />
                <TrainDay running_days={props.train_details.running_days[3]} day="Thurs " />
                <TrainDay running_days={props.train_details.running_days[4]} day="Fri " />
                <TrainDay running_days={props.train_details.running_days[5]} day="Sat " />
                <TrainDay running_days={props.train_details.running_days[6]} day="Sun "  />
            </div>

            <div className='firstrowr1'>
              <Popup trigger={<button className="delbutton">Show Route</button>} modal nested>
                {close => (
                  <div className="popup_bound">
                      <button onClick={() => view_train_route(props.train_details.train_no)} className="delbutton">Show Route</button>
                      <div className="all_item">
                        <table className="paytable">
                          <tr>
                            <th>Source_stn_name</th>
                            <th>Arrival time</th>
                            <th>Departure time</th>
                            <th>Distance (km)</th>
                            <th>Day</th>
                          </tr>
                          {trainroute.map((x) => (
                            <tr>
                              <td>{x.source_stn_name} ({x.source_stn_code})</td>
                              <td>{x.arrive}</td>
                              <td>{x.depart}</td>
                              <td>{x.distance}</td>
                              <td>{x.day}</td>
                            </tr>
                          ))}
                        </table>
                        <button className="delbutton" onClick={() => close()}>
                          CLOSE
                        </button>
                      </div>
                  </div>
                )}
              </Popup>
            </div>

          </div>

          <div className='firstrow'>

            <div className='firstrowl2'>{props.train_details.from_time} | {props.train_details.from_stn_name} ({props.train_details.from_stn_code})</div>

            <div className='firstrowc2'>{props.train_details.travel_time.slice(0, 2)} hours and {props.train_details.travel_time.slice(3, 5)} minutes</div>

            <div className='firstrowr2'>{props.train_details.to_time} | {props.train_details.to_stn_name} ({props.train_details.to_stn_code})</div>

          </div>

          
        
    </div>
  )
}

export default Train_id
