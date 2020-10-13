import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi(); 

function App() {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  //will load when name component loads and changes
  useEffect(() => {
    const hash = getTokenFromUrl();
    // Do not want to show off the token
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe()
    }

    console.log("Here is my token ", token);
  }, []);

  return (
    //BEM
    <div className="app">
      {
        token ? (
          <h1> I am logged in. </h1>
          ) : (
          <Login />    
        )
      }
    </div>
  );
}

export default App;
