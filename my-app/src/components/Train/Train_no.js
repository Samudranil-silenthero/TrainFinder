import React, { useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../../component_style/train/train_no.css'
import  Train_id from "./Train_id";
import Train from "./Train";

function Train_no() {
  const trainno=useRef();
  const [traindetails,settraindetails]=useState([]);
  const [isloading,setisloading]=useState(false);
  const [search,setsearch]=useState(false);
  const [err,setErr]=useState(false);
  const [errMsg,setErrMsg]=useState();
  
  const train_no_search=async ()=>{
    try {
      if(trainno.current.value==="") throw Error("Enter all field");
      setisloading(true);
      const train_details = await axios.get("https://indian-railway-api.cyclic.app/trains/getTrain/?trainNo="+trainno.current.value);
      if(train_details.data.success===false) throw Error(train_details.data.data);
      setErr(false);
      settraindetails(train_details.data.data)
      // console.log(traindetails);
      setisloading(false);
      setsearch(true);
    } 
    catch (error) {
        setErr(true);
        setErrMsg(error.message);
        console.log(error.message)
    }
  }

  return (
    <div className='filepage'>
        <Train/>
        <div><p>Enter a valid train number</p></div>
      
        <div className='smallDIV'>
          <input className='loginput' type="text" name="name" placeholder="Enter a valid train number:" ref={trainno} required/>
          <button className="searchbutton" onClick={train_no_search} >SEARCH</button>
        </div> 
        {err ?
             <div className='errdivadd'>{errMsg}</div>
             :(isloading?
                        <div>Loading. please wait</div>:
                        search?<Train_id train_details={traindetails} />:<div/>
              )
        }
      
    </div>
  )
}

export default Train_no
