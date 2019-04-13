import {combineReducers} from 'redux';

import WeatherReducer from './reducer_whether';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;