import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../../component_style/train/train_id.css'
import Popup from 'reactjs-popup';

function Train_id_mmt(props) {
  const [err,seterr]= useState(false)
  const [errMsg,setErrMsg]= useState("")
  const [isloading,setisloading]=useState(false);
  const [trainroute,settrainroute]=useState([]);
  const [fare,setfare]=useState();
  const [seatqty,setseatqty]=useState();
  
  const view_train_route=async (train_no)=>{
    try {
      setisloading(true);
      const train_details = await axios.get("https://indian-railway-api.cyclic.app/trains/getRoute?trainNo="+ train_no );
      if(train_details.data.success===false) throw Error("Train not found");
      settrainroute(train_details.data.data);
      console.log(trainroute)
      setisloading(false);
    } 
    catch (err) {
        seterr(true);
        setErrMsg("Train not found");
        console.log("Train not found")
    }
  }

  const view_seat_avl=async (trainNumber,frmStnCode,toStnCode,className,quota, travel_date)=>{
    try {
      console.log(trainNumber,frmStnCode,toStnCode,className,quota, travel_date);
      setisloading(true);
      const train_seat_details = await axios.post("https://railways.makemytrip.com/api/availability/fetchLatestAvailability",
      {
        "destination": toStnCode,
        "source": frmStnCode,
        "doj": travel_date,
        "trainNumber": trainNumber,
        "class": className,
        "quota": quota
      });
      setfare(train_seat_details.data.totalFare);
      setseatqty(train_seat_details.data.avlDayList[0].availablityStatus);
      setisloading(false);
    } 
    catch (err) {
        setisloading(false);
        seterr(true);
        setErrMsg("Train not found");
        console.log("Train not found")
    }
  }

  return (
    <div className='roww'>

          <div className='firstrow'>

            <div className='firstrowl1'>{props.train_details.trainName} ({props.train_details.trainNumber})</div>

            <div className='firstrowc1'>Runs on: 
                {props.train_details.runningMon==="Y"?<span>Mon | </span>:<span></span>}
                {props.train_details.runningTue==="Y"?<span>Tue | </span>:<span></span>}
                {props.train_details.runningWed==="Y"?<span>Wed | </span>:<span></span>}
                {props.train_details.runningThurs==="Y"?<span>Thurs | </span>:<span></span>}
                {props.train_details.runningFri==="Y"?<span>Fri | </span>:<span></span>}
                {props.train_details.runningSat==="Y"?<span>Sat | </span>:<span></span>}
                {props.train_details.runningSun==="Y"?<span>Sun | </span>:<span></span>}
            </div>

            <div className='firstrowr1'>
              <Popup trigger={<button className="delbutton">Show Route</button>} modal nested>
                {close => (
                  <div className="popup_bound">
                      <button onClick={() => view_train_route(props.train_details.trainNumber)} className="delbutton">Show Route</button>
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

            <div className='firstrowl2'>
              <div>
                    {props.train_details.departureTime12hFormat} {props.train_details.departureMeridiem} | {props.train_details.frmStnName} ({props.train_details.frmStnCode})
              </div>
              <div>
                    Departure Day:{props.train_details.fromDay}
              </div>              
            </div>

            <div className='firstrowc2'>
              <div>{props.train_details.durationHours} hours and {props.train_details.durationMinutes} minutes</div>
              <div>{props.train_details.distance} (km)</div>
            </div>

            <div className='firstrowr2'>
              <div>
                {props.train_details.arrivalTime12hFormat} {props.train_details.arrivalMeridiem} | {props.train_details.toStnName} ({props.train_details.toStnCode})
              </div>
              <div>
                    Arrival Day:{props.train_details.toDay}
              </div>
            </div>

          </div>
          
          <div className='flex-container '>
            {props.train_details.tbsAvailability.map((x)=>(
                <div className='flex-container-child'>
                  <div>{x.className}, {x.quota}</div>
                  <Popup trigger={<button className="delbutton">Get latest Availabilty</button>} modal nested>
                    {close => (
                      <div className="popup_bound_seat_quert">
                          <button onClick={() => view_seat_avl(props.train_details.trainNumber,props.train_details.frmStnCode,props.train_details.toStnCode,x.className,x.quota, props.travel_date)} className="delbutton">Get latest Availabilty</button>
                          <div>
                            Fare:{isloading?<span>Loading...</span>:<span> {fare}</span>}{err?<span>{errMsg}</span>:<span></span>}
                          </div>
                          <div>SEAT:{isloading?<span>Loading...</span>:<span> {seatqty}</span>}</div>
                          <div className="all_item">
                            <button className="delbutton" onClick={() => {close(); setfare(0); setseatqty(0); seterr(false); setisloading(false);}}>
                              CLOSE
                            </button>
                          </div>
                      </div>
                    )}
                  </Popup>
                </div>
            ))}
          </div>

    </div>
  )
}

export default Train_id_mmt
