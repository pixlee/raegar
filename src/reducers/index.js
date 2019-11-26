import { combineReducers } from 'redux'
import currentSection from './navigation'
import album from './widget'

export default combineReducers({
  currentSection,
  album
})