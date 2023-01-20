import React from "react";
import { buyBall } from "./redux/buyBalls/BallAction";
import {connect} from 'react-redux';
function BallContainer({numOfBalls,buyBall}) {
  console.log("Ball render");
  return (
    <div>
      <h1>Number of Balls-{numOfBalls}</h1>
      <button onClick={buyBall}>Buy Balls</button>
    </div>
  );
}

//first method for reading from global state
const mapStateToProps=state=>{
  // console.log("state",state);
  return {
    numOfBalls:state.ball.numOfBalls
  }
}

//second method for dispatch an action for a component or Write 
const mapDispatchToProps=dispatch=>{
  return{
    buyBall:()=>dispatch(buyBall())
  }
}

//connect these fn to redux
export default connect(mapStateToProps,mapDispatchToProps)(BallContainer);
