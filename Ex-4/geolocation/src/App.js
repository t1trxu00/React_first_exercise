import { useEffect } from "react";
import {useState } from "react";
import './App.css';

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      }, (error) => {
        alert(error);
      });
    }
    else{
      alert("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <p>
      Position:
      {lat.toFixed(3)},
      {long.toFixed(3)}
    </p>
  );
}

export default App;
