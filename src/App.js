import React, {useState, useRef} from "react"
import './App.css';
import { Auth } from './components/Auth'
import Cookies from "universal-cookie"
import { Chat } from "./components/Chat";
import LineChart from "./components/linechart/Linechart";

const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef(null)
  if(!isAuth){
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }
  return (
    <div> {room ? 
      <Chat room={room}/> : 
      <div className="room">
        <label>Enter Room name :</label>
        <input ref={roomInputRef} />
        <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button> 
      </div>}
      <div className="chart">
        <LineChart />
      </div>
    </div>
  )
}

export default App;
