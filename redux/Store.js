import {createStore} from "redux";
import reducers from './reducers'
const ADD_CART = 'ADD_CART';
const REMOVE_CART ='REMOVE_CART';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

const store = createStore(reducers);
console.log(store.getState());
