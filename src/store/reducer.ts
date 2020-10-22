import { combineReducers } from 'redux'
import { reducer as indexReducer }  from '../pages/index/store'
import {reducer as subjectReducer } from '../pages/index/store'



export default combineReducers({
  index: indexReducer,
  subject: subjectReducer
})
