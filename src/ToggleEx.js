import React,{useState,useEffect} from 'react'
import './ToggleEx.css';

const ToggleEx= () => {
const [flag,setFlag]=useState(true);

    const switchToggle=(e)=>{
        // let value=e.target.value
        setFlag((data)=>!data)

    }

   
  
  return (
    <>
        <input   style={ flag ? {backgroundColor:'#FFFFCC'} : { backgroundColor:'#778899'} }   className="switchInp" type="button" onClick={switchToggle} value={flag?"ON":"OFF"}/>
  {flag?<div className="onswitch"><span>Switch is ON ...</span></div>:<div className='offswitch'><span>Switch is Off..</span></div>}

    </>
  )
}

export default ToggleEx