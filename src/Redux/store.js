import { createStore } from 'redux';
import rootReducer from './Reducers';

const initailState = {};

const store = createStore(
	rootReducer, 
	initailState
);


export default store;