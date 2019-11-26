import { combineReducers } from 'redux'
import { currentSection, fetchingData } from './shared'
import album from './widget'

export default combineReducers({
    fetchingData,
    currentSection,
    album
})