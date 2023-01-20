import React,{useState} from 'react';
import {connect} from 'react-redux';
import { buyBat,sellBat } from './redux/bats/BatAction';

function BatContainer({numOfBats,buyBat,sellBat}) {
    console.log("Bat Render");
    const[number,setNumber]=useState(0);
  return (
    <div>
        <h2>Number of Bats-{numOfBats}</h2>
        <input type='number' value={number} onChange={e=>setNumber(e.target.value)}/>
        <button onClick={()=>{buyBat(number)}}>Buy {number} Bat</button>
        <button onClick={()=>{sellBat(number)}}>Sell {number} Bat</button>
    </div>
  )
}

const mapStateToProps=state=>{
    console.log("state",state.bat);
    return{
        numOfBats:state.bat.noOfBats
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyBat:(number)=>dispatch(buyBat(number)),
        sellBat:(number)=>dispatch(sellBat(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BatContainer);