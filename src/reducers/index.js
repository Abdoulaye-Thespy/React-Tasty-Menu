import { combineReducers } from 'redux';
import menu from './menu';
import filter from './filter';

const mainReducer = combineReducers({ filter, menu})

export default mainReducer;
