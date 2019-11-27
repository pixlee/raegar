
import { SHOW_LIGHTBOX, HIDE_LIGHTBOX } from '../actions/lightbox'

export function lightbox(state = null, action) {
    switch(action.type) {
        case SHOW_LIGHTBOX:
            return action.lightbox ? action.lightbox : null
        case HIDE_LIGHTBOX:
            return null
        default:
            return state;
    }
}