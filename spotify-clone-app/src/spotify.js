// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

// click login I go to this
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirect to spotify login page

// then redirect to home page once logged in
const redirectUri = "http://localhost:3000/";
const clientId = "cf8f407709074adeaabb84a6492c42c8";

// staete available functionalities on the api for the user
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// generate web address to send user to that address
// %20 will add ASCII space of 20%
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
