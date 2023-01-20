import {combineReducers} from "redux";
import BatReducer from "./bats/BatReducer";
import BallReducer from './buyBalls/BallReducer';
import UserReducer from "./users/UserReducer";
const rootReducer=combineReducers({
    ball:BallReducer,
    bat:BatReducer,
    users:UserReducer
});
export default rootReducer;