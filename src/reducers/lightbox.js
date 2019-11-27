
import { SHOW_LIGHTBOX } from '../actions/lightbox'

export function lightbox(state = null, action) {
    switch(action.type) {
        case SHOW_LIGHTBOX:
            return action.lightbox ? action.lightbox : null
        default:
            return state;
    }
}