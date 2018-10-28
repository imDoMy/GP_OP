import { combineReducers } from 'redux';
import BusinessesReducer from './BusinessesReducer';
import AuthReducer from './AuthReducer';


export default combineReducers({
  auth: AuthReducer,
  businesses: BusinessesReducer

});
