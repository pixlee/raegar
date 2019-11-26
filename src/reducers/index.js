import { combineReducers } from 'redux'
import currentSection from './shared'
import album from './widget'

export default combineReducers({
  currentSection,
  album
})