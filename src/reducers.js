import { combineReducers } from 'redux';
import form from './form/reducer';
import todos from './todo/reducer';

export default combineReducers({ form, todos })