import { combineReducers } from 'redux';
import hotelReducer from './hotelReducer';
import SelectionReducer from './selectionReducer';

export default combineReducers({
    hotels: hotelReducer,
    selectedHotelId: SelectionReducer
});
