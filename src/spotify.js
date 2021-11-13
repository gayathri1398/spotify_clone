
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "cff76213089a4e228206c8bf120d67cb";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  
  "user-modify-playback-state",
//   "user-top-read"
  
];

export const getTokenFromUrl =()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        var parts = item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial

    },{})
}



export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;