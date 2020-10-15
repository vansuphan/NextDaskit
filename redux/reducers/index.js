
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import {combineReducers} from 'redux';

export default reduces =  combineReducers({
    cart : cartReducer,
    product : productReducer
});

