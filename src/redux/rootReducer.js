import {combineReducers} from 'redux';
import foodsReducer from './Foods/foods.reducer';

const rootReducer = combineReducers({
    foodsRed :foodsReducer
})
export default rootReducer;