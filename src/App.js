import { useEffect,useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify';
import { useDataLayerValue } from './DataLayer';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{user},dispatch] = useDataLayerValue();


  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;


    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) =>{
        console.log("person emojjiii",user)
        dispatch({
          type:'SET_USER',
          user:user
        })
      } )
    }
    console.log("Yoy!!!",token)
  },[])


  return <>
    <div className="app">
     {token? <Player spotify/>: (
     <Login/>
     )}
    </div>
  
  </>
}

export default App;
