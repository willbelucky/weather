import axios from 'axios';

const API_KEY = '3f7033c2a401df074d5364b0ff282da0';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}