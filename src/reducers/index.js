import { combineReducers } from 'redux';
import menu from './menu';
import filter from './filter';

const mainReducer = combineReducers({ filter, menus: menu });

export default mainReducer;
