import { combineReducers } from 'redux';

import students from './students';
import filters from './filters';

const rootReducer = combineReducers({
  students,
  filters,
});

export default rootReducer;
