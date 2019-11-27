import { combineReducers } from 'redux'
import { currentSection, loading } from './shared'
import { album, filter, layout, previewDevice, theme } from './widget'
import { lightbox } from './lightbox'

export default combineReducers({
    loading,
    currentSection,
    album,
    filter,
    layout,
    previewDevice,
    theme,
    lightbox
})