import axios from 'axios';

const API_KEY = 'fc08c3931365780b17cd29b3039fdab8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // ES6 template string

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  //console.log('Request:', request);
  // this action is intercepted by 'redux-promise' middleware
  // waits for promise to resolve
  // sends new action to reducer

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
