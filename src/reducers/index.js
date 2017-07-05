import { combineReducers } from 'redux';
import repos from './repos';
import repoData from './repoData';

export default combineReducers({
  repos,
  repoData
})