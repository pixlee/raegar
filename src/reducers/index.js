import { combineReducers } from 'redux'
import { currentSection, loading } from './shared'
import { album, filter } from './widget'

export default combineReducers({
    loading,
    currentSection,
    album,
    filter
})