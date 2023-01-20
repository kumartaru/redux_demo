import "./App.css";
import Store from "./redux/Store";
import { Provider } from "react-redux";
import BallContainer from "./BallContainer";
import BatContainer from "./BatContainer";
import UserContainer from "./UserContainer";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        {/* <BallContainer />
        <BatContainer /> */}
        <UserContainer/>
      </Provider>
    </div>
  );
}

export default App;
