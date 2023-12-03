import React, {  useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../../component_style/train/train_betwn_stations.css'
import  Train_id_mmt from "./Train_id_mmt";
import Train from "./Train";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Train_betwn_stations() {
  const stncode2=useRef();
  const stncode1=useRef();
  const [traindetails,settraindetails]=useState([]);
  const [isloading,setisloading]=useState(false);
  const [showsuggestion,setshowsuggestion]=useState(false);
  const [err,setErr]=useState(false);
  const [errMsg,setErrMsg]=useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sendDate, setsendDate] = useState(new Date());

  const train_search=async ()=>{
    let d=""+selectedDate.$y;
    if(selectedDate.$M+1<10) d+='0';
                             d+=selectedDate.$M+1;
    if(selectedDate.$D<10)   d+='0';
                             d+=selectedDate.$D;
    setsendDate(d);
    try {
      setisloading(true);
      setshowsuggestion(false);
      const train_details = await axios.post("https://railways.makemytrip.com/api/trains", 
      {
        "srcStn": stncode1.current.value,
        "destStn":stncode2.current.value,
        "date": d,
        "mmtAuth": null,
        "myBusinessSubscription": null
      });
      console.log(train_details.data.trainBtwnStnsList);
      if(train_details.data.error) throw Error(train_details.data.error);
      setErr(false);
      settraindetails(train_details.data.trainBtwnStnsList)
      setisloading(false);
    } 
    catch (error) {
        setErr(true);
        setErrMsg(error.message);
        console.log(error.message)
    }
  }

  const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (event) => {
        try {
          setshowsuggestion(false);
          const { value } = event.target;
          setSuggestions([]);
          const station_list = await axios.get("http://localhost:5000/api/routecheck",{params:{'str':value}});
          setSuggestions(station_list.data);
          console.log(station_list.data);
          setshowsuggestion(true);
        } 
        catch (err) {
            setErr(true);
            setErrMsg("Train not found");
            console.log("Train not found")
        }
    };



  return (
    <div className='filepages'>
        <Train/>

        <div className='smallDIVs'>
          <input className='loginputs' type="text" name="name" placeholder="Enter source platform code:" ref={stncode1} required onChange={handleInputChange}/>
          <input className='loginputs' type="text" name="name" placeholder="Enter destination platform code:" ref={stncode2} required onChange={handleInputChange}/>
          <div className='datepick'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                        <DatePicker label={'"month", "day", "year"'}   className="my-datepicker" disablePast onChange={(date) => {
                            setSelectedDate(date);
                            // seterr(false);
                        }}/>                                      
                    </DemoContainer>
            </LocalizationProvider>
          </div>  
          <button className="searchbuttons" onClick={train_search} >SEARCH</button>
        </div>
        {err ?
             <div className='errdivadds'>{errMsg}</div>
             :(isloading?
                        <div>Loading. please wait</div>:
                        <div>
                          {
                            traindetails.map((x) => (<Train_id_mmt train_details={x} travel_date={sendDate}/>
                          ))}
                        </div>
              )
        }
        
        {showsuggestion ?
             <div className='suggest'>
                  {
                    suggestions.map((x) => (<div className='suggest-child'>{x}</div>
                ))}
             </div>
             :<div/>
        }
    </div>
  )
}

export default Train_betwn_stations
