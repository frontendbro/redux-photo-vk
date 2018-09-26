import {combineReducers} from 'redux';
import {pageReducer} from './page';
import {userReducer} from './user';
import {tracksReducer} from './tracks';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  tracks: tracksReducer
})
