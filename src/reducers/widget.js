
import { 
    GET_ALBUM, FILTER_ALBUM, 
    CHANGE_DISPLAY_LAYOUT, CHANGE_PREVIEW_DEVICE
} from '../actions/widget'

import { getAlbum } from '../data/albums'

export function album(state = null, action) {
    switch(action.type) {
        case GET_ALBUM:
            return {
                ...getAlbum(action.album)
            }
        default:
            return state;
    }
}

export function filter(state = null, action) {
    switch(action.type) {
        case FILTER_ALBUM:
            return action.filter
        default:
            return state;
    }
}

export function layout(state = null, action) {
    switch(action.type) {
        case CHANGE_DISPLAY_LAYOUT:
            return action.layout
        default:
            return state;
    }
}

export function previewDevice(state = null, action) {
    switch(action.type) {
        case CHANGE_PREVIEW_DEVICE:
            return action.previewDevice
        default:
            return state;
    }
}