import { useEffect,useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{},dispatch] = useDataLayerValue();


  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;


    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) =>{
        console.log("heyyy!",user)
      } )
    }


    console.log("Yoy!!!",token)
  },[])

  return <>
    <div className="app">
     {token? <h1>I am Logged in Yoy!!!</h1>: (
     <Login/>
     )}
    </div>
  
  </>
}

export default App;
